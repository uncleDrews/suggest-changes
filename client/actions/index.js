import {get, post, put, del} from "./baseApi";

export const PARSE_ARTICLE = 'PARSE_ARTICLE';
export const ARTICLE_URL_STATE = '';
export const SUGGEST_CHANGE = 'SUGGEST_CHANGE';
export const SUGGESTED_CHANGES_FETCHED = 'SUGGESTED_CHANGES_FETCHED';
export const APPROVE_CHANGE = 'APPROVE_CHANGE';
export const APPROVE_CHANGE_FAILED = 'APPROVE_CHANGE_FAILED';


export function getParsedParagraphs(url) {
    const request = get(`article-parse`);
    return {
        type: PARSE_ARTICLE,
        payload: request
    }
}

export function suggestChange(url, originalText, suggestedText) {
    const body = {
        articleUrl: url,
        originalText: originalText,
        usersText: suggestedText
    };
    const request = post(`suggest-change`, body);
    return {
        type: SUGGEST_CHANGE,
        payload: request
    }
}

export function approveSuggestion(suggestion) {
    suggestion.isApproved = true;

    put(`suggest-change/${suggestion._id}`, suggestion)
        .then((data) =>
            ({
            type: APPROVE_CHANGE,
            payload: _id,
             }))
        .catch((err) =>
            ({
                type: APPROVE_CHANGE_FAILED,
                payload: err,
            })
        );
}

export function getSuggestionsForArticle(url){
    const request = get(`suggest-change?articleUrl=${url}`);
    return {
        type: SUGGESTED_CHANGES_FETCHED,
        payload: request,
    }
}
