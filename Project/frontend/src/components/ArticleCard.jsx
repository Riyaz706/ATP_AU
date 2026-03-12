import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  tagClass,
  timestampClass
} from '../styles/common';
import { authStore } from '../store/authStore';

function ArticleCard({ article }) {
  const navigate = useNavigate();
  const { title, content, author, category, updatedAt } = article;
  const { currentUser } = authStore();
  const date = new Date(updatedAt).toLocaleDateString();

  return (
    <div className={articleCardClass}>
      <div className="flex justify-between items-start mb-2">
        <span className={tagClass}>{category}</span>
        <span className={timestampClass}>{date}</span>
      </div>
      
      <h3 className={articleTitle}>{title}</h3>
      <p className={articleExcerpt}>{content}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className={articleMeta}>
          By <span className="font-medium text-gray-900">{author?.firstName} {author?.lastName}</span>
          <p className="text-xs text-gray-500 mt-0.5">Updated: {new Date(article.updatedAt).toLocaleString()}</p>
          <button 
            className='bg-blue-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-700 transition w-full text-sm font-medium' 
            onClick={() => navigate(`/article/${article._id}`)}
          >
            Read More
          </button>
      {/*if author then we can update the article*/}
      {currentUser.role === 'AUTHOR' && (
        <button 
          className='bg-blue-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-700 transition w-full text-sm font-medium' 
          onClick={() => navigate(`/article/${article._id}`)}
        >
          Update Article
        </button>
      )}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
