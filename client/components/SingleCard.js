import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class SingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.originalText,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({value: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (this.props.originalText !== this.state.value && this.state.value !== '') {
            this.props.suggestChange(this.props.url, this.props.originalText, this.state.value);
            this.setState({value: this.props.originalText});
        } else {
            alert(`User's suggestion can't be equal original paragraph text and can't be blank!`);
        }
    };

    render() {
        return (
            <div className='article-wrapper'>
                <div className='inner'>
                    <div className='paragraph'>
                        <div className='flex-row'>
                            <h4>Original paragraph text:</h4>
                        </div>
                        <p className='original-text'>{this.props.originalText}</p>
                    </div>
                    <form className='suggestion-form' onSubmit={this.onFormSubmit}>
                        <h4>Make a suggestion:</h4>
                        <textarea
                            id="suggestion-field"
                            value={this.state.value}
                            onChange={this.onInputChange}
                           />
                        <button
                            className='btn btn-primary'
                            type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

SingleCard.propTypes = {
    originalText: PropTypes.string,
    suggestChange: PropTypes.func,
    url: PropTypes.string
};
