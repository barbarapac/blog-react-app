import React from 'react';
import { Link } from 'react-router-dom';
import './PostsList.css';

const PostsList = ({posts, title, showLink=false}) => {
  
  return (
    <body className="post-container">
        <div>
          <h1>{title}</h1>
            <ul className="post-list">
                    {posts.map((news) => (
                    <li key={news.id} className="post-item">
                        <Link to={`/post/${news.id}`} className="post-title">
                        {news.title}
                        </Link>
                        <p>{news.description}</p>
                    </li>
                    ))}
            </ul>
            {showLink && (<Link to="/all-posts" className="post-all" disabled="true">Ver Tudo</Link>)}
        </div>
    </body>
  );
};



export default PostsList;
