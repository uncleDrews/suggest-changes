import React from 'react';

const ArticleNotFound = ()=>{
    return(
        <div className='nothing-found'>
            <h1>There is no such article, try pass the right link with query params</h1>
            <h3>Be sure you heading for /fb?articleURL=https://article_url</h3>
            <h4>Without any quotes</h4>
            <img src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" alt=""/>
        </div>
    );
};

export default ArticleNotFound;