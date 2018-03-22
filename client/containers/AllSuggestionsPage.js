import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SingleArticleWithChanges from '../components/SingleArticleWithChanges';
import * as _ from 'lodash';
import {getAllSuggestions} from "../actions";
const queryString = require('query-string');


class AllSuggestionsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showApproved : false,
        };
        this.checkQuerystring = this.checkQuerystring.bind(this);
    }

    checkQuerystring(){
        const showApproved = queryString.parse(this.props.location.search).showApproved;
        console.log('show approed', showApproved);
        console.log(typeof showApproved);
        if (showApproved && showApproved === 'true') {
            this.setState({showApproved : true});
        }
        console.log(this.state);
    }

    componentDidMount(){
        this.checkQuerystring();
        this.props.getAllSuggestions(this.state.showApproved);
    }

    renderArticlesAndChanges(){
        if(this.props.collect.length) {
            return this.props.collect.map( (article, index) => {
                return (
                        <SingleArticleWithChanges
                        key={index}
                        articleUrl={article.articleUrl}
                        paragraphs={article.articleParagraphs}
                    />
                )
            }
            )
        } else {
            return (
                <div className='nothing-found'>
                    <h1>
                        There are no suggestions available
                    </h1>
                    <img src="https://media.giphy.com/media/CJN2cdXD51Q2c/giphy.gif" alt=""/>
                </div>
            )
        }
    }

    render(){
        return(

           <div>
               {this.renderArticlesAndChanges()}
           </div>
        )
    }
}

function mapStateToProps({suggestedChanges}) {
    //warning: shame block ahead
    const collect = _.chain(suggestedChanges)
        .groupBy('articleUrl')
        .map(function (value, key) {
            return {
                articleUrl: key,
                articleParagraphs: _.chain(value)
                    .groupBy('originalText')
                    .map(function (value, key) {
                        return{
                        originalParagraph: key,
                        suggestedChanges: value}
                    })
                    .value()
            }
        })
        .value();
    return {collect};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllSuggestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSuggestionsPage);
