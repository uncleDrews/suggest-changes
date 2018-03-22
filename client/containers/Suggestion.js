import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {approveSuggestion} from "../actions";


function Suggestion(props) {

    return (
        <div className='single-suggestion'>
            <p>{props.suggestion.usersText}</p>
            {!props.suggestion.isApproved && <button
                onClick={()=>(props.approveSuggestion(props.suggestion))}
                className='btn btn-primary'>
                Approve
            </button>}
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({approveSuggestion}, dispatch);
}

export default connect(null, mapDispatchToProps)(Suggestion);


