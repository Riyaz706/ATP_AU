// Create http server
//import express module
   
import exp from 'express'

// create server
const app = exp()
// assign port number
app.listen(3000,()=>{
   console.log("server started at port 3000")
})

//create api (req handlers)
//get req handler route
//post req handler route
//put req handler route
//delete req handler route

app.get('/users', (req, res) => { 
   res.json({ "message": "this is response from get users api" })
})

app.post('/users', (req, res) => { 
   res.json({ "message": "this is response from post users api" })
})

app.put('/users/:id', (req, res) => { 
   res.json({ "message": "this is response from put users api" })
})

app.delete('/users/:id', (req, res) => { 
   res.json({ "message": "this is response from delete users api" })
})