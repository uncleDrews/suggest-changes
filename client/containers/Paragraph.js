import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteSuggestions } from '../actions';
import Suggestion from './Suggestion';

class Paragraph extends Component{
    constructor(props){
        super(props)
        this.state = {
            areThereSuggestions: false
        }
    }

    render(){ return (
        <div
            className='paragraph'
        >
            <div className='flex-row'>
                <h4>Original paragraph text:</h4>
                <button
                    onClick={()=>(this.props.deleteSuggestions(this.props.paragraph.suggestedChanges))}
                    className='bnt btn-danger'>
                    Delete all suggestions for paragraph
                </button>
            </div>
            <p className='original-text'>
                {this.props.paragraph.originalParagraph}
            </p>
            <h4>Users suggestions</h4>
            {(this.props.paragraph.suggestedChanges).map(
                (suggestion, index) => {
                    if (suggestion.isApproved === false) {
                        return (<Suggestion
                                key={index}
                                suggestion={suggestion}/>
                        )
                    }
                }
            )}
        </div>
    )}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteSuggestions}, dispatch);
}

export default connect(null, mapDispatchToProps)(Paragraph);
