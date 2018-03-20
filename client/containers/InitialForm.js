import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class InitialForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchInputChange(event) {
        this.setState({term: event.target.value});
    }

    onSearchSubmit(event) {
        event.preventDefault();
        this.setState({term: ''});
    }
        render()
        {
            return (
                <form onSubmit={this.onSearchSubmit}>
                    <div className='form-group'>
                        <div className="col-md-9">
                            <input
                                className='form-control'
                                type="text"
                                placeholder='Get your five-day forecast in your favourite Ukraine cities! (Type in English, please)'
                                value={this.state.term}
                                onChange={this.onSearchInputChange}/>
                        </div>
                        <div className='col-md-3'>
                            <button
                                type='submit'
                                className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )
        }
}