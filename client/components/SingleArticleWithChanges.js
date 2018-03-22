import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../containers/Paragraph';

export default class SingleArticleWithChanges extends Component {

    constructor(props) {
        super(props);
    }

    renderParagraphs() {
        if (this.props.paragraphs.length) {
            return this.props.paragraphs.map(
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
    }

    render() {
        return (
            <div className='article-wrapper'>
                <div className='header'>
                    <strong>Article URL: </strong> {this.props.articleUrl}
                </div>
                <div className='inner'>
                    {this.renderParagraphs()}
                </div>
            </div>
        )
    }
}


SingleArticleWithChanges.propTypes = {
    articleUrl: PropTypes.string,
    textAndSuggestions: PropTypes.array,
};

