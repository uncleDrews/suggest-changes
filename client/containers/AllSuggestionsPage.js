import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SingleArticleWithChanges from '../components/SingleArticleWithChanges';
import * as _ from 'lodash';
import {getAllSuggestions} from "../actions";
import SuggestionsNotFound from "../components/SuggestionsNotFound";
const queryString = require('query-string');


class AllSuggestionsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showApproved : false,
        };
    }

    fetchSuggestions(){
        const showApproved = queryString.parse(this.props.location.search).showApproved === 'true';
        this.setState({showApproved}, () => this.props.getAllSuggestions(this.state.showApproved));
    } ;

    componentDidMount(){
        this.fetchSuggestions();
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
               <SuggestionsNotFound/>
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
