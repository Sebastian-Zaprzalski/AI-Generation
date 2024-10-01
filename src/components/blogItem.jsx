import React from 'react';

export const BlogItem = ( {topic, author} ) => {
    return <div className="blog-item">
               <h2 className="blog-topic">
                   {topic}
               </h2>
               <p className="blog-author">{author}</p>
           </div>;
}