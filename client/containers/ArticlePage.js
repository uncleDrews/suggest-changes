import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getParsedArticle } from "../actions/index";
import SingleCard from "../components/SingleCard";
import {suggestChange} from "../actions";
import Link from "react-router-dom/es/Link";
const queryString = require('query-string');



class ArticlePage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getParsedArticle(queryString.parse(this.props.location.search).articleURL);
    }

    renderParagraphs(){
       if(this.props.article.paragraphs.length && this.props.article.title!==''){
       return this.props.article.paragraphs.map((parText, index)=>
           
            <SingleCard
                key={index}
                originalText={parText}
                suggestChange={this.props.suggestChange}
                url={queryString.parse(this.props.location.search).articleURL}/>
       );
       } else return(
           <div className='nothing-found'>
               <h1>There is no such article, try pass the right link with query params</h1>
               <img src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" alt=""/>
           </div>
       )
       
    }


    render() {
        return(
            <div>
                <Link
                    className='btn btn-primary'
                    to="/result">
                    Go to Results
                </Link>
                <h1>
                    {this.props.article.title}
                </h1>
                <div>
                    {this.renderParagraphs()}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getParsedArticle, suggestChange }, dispatch);
}

function mapStateToProps( {article} ) {
    return { article };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);