import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SingleCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: props.originalText,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({value: event.target.value});
    }

    onFormSubmit(){
        alert('A name was submitted: ' + this.state.value);
        this.props.suggestChange(this.state.value, this.props.originalText);
        event.preventDefault();
    };

    render(){
        return(
            <div className="card">
                <div>
                    <h3>Original Text</h3>
                    <p>
                        {this.props.originalText}
                    </p>
                </div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <textarea
                            value={this.state.value}
                            onChange={this.onInputChange}
                            cols="30"
                            rows="10"/>
                        <button>
                            Suggest
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

SingleCard.propTypes = {
    originalText: PropTypes.string,
    suggestChange: PropTypes.func
};
