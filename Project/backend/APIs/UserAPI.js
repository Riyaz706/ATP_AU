import exp from 'express'
import { register, login } from '../services/authService.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { checkUser } from '../middleware/checkUser.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userRouter = exp.Router()

//Register User
userRouter.post('/users', async (req, res) => {
    //get user obj
    let userObj = req.body;
    //call service
    const newUserObj = await register({ ...userObj, role: "USER" });
    //send response
    res.status(201).json({ message: 'user created successfully', payload: newUserObj });
});


//read article of user (Available to all authenticated roles)
userRouter.get('/read-articles', verifyToken, async (req, res) => {
    //get all active articles
    let articles = await ArticleModel.find({ isArticleActive: true }).populate("author", "firstName lastName email");
    res.status(200).json({ message: 'articles fetched successfully', payload: articles });
})

//add comment to an article
userRouter.put("/articles", verifyToken, checkUser, async (req, res) => {

    //get comment obj 
    const { articleId, comment } = req.body;
    //get user id from req.user (attached by verifyToken)
    const userId = req.user.id;
    //add comment to the article
    let result = await ArticleModel.findByIdAndUpdate(articleId,
        {
            $push: {
                comments: { user: userId, comment: comment }
            }
        },
        { new: true }
    );
    //send response
    res.status(200).json({ message: "comment added successfully", payload: result });
});