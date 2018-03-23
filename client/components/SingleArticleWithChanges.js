import React from 'react';
import Paragraph from '../containers/Paragraph';

  const SingleArticleWithChanges = (props)=> {


    const renderParagraphs = ()=> {
        if (props.paragraphs.length) {
            return props.paragraphs.map(
                (paragraph, index) => {
                    return (
                        <Paragraph
                            key={index}
                            paragraph={paragraph}
                        />
                    );
                }
            );
        }
    };

        return (
            <div className='article-wrapper'>
                <div className='header'>
                    <strong>Article URL: </strong> {props.articleUrl}
                </div>
                <div className='inner'>
                    {renderParagraphs()}
                </div>
            </div>
        )
};


export default SingleArticleWithChanges;