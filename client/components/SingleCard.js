import React, {Component} from 'react';

export default class SingleCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: props.originalText,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({value: event.target.value});
    }

    onFormSubmit(){

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
                    <form>
                        <textarea value={this.state.value}  cols="30" rows="10"></textarea>
                        <button>
                            Suggest
                        </button>
                    </form>
                </div>

            </div>
        );
    }


}