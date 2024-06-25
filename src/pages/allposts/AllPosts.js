import React from 'react';
import { newsData } from '../../data/DataPosts';
import './AllPosts.css';
import PostsList from '../../components/postslist/PostsList'

const AllPosts = () => {
  return (
    <body className="all-posts-container">
        <div>      
            <PostsList posts={newsData.slice()} title={"Todas as Notícias"}/>
      </div>
    </body>
  );
};

export default AllPosts;
