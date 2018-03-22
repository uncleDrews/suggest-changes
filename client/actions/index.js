import {get, post, put, del} from "./baseApi";

export const PARSE_ARTICLE = 'PARSE_ARTICLE';
export const SUGGEST_CHANGE = 'SUGGEST_CHANGE';
export const SUGGESTED_CHANGES_FETCHED = 'SUGGESTED_CHANGES_FETCHED';
export const APPROVE_CHANGE = 'APPROVE_CHANGE';
export const DELETE_SUGGESTIONS = 'DELETE_SUGGESTIONS';


export function getParsedArticle(url) {
    const request = get(`article-parse?articleUrl=${url}`);
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
    let request = put(`suggest-change/${suggestion._id}`, suggestion);
    return {
        type: APPROVE_CHANGE,
        payload: request
    }
}

export function getAllSuggestions(showApproved){
    const request = get(`suggest-change?isApproved=${showApproved}`);
    return {
        type: SUGGESTED_CHANGES_FETCHED,
        payload: request,
    }
}

export function deleteSuggestions(changes){

    const request = del(`suggest-change?suggestionsArray=${changes.map(change=>change._id).join(',')}`);
    return {
        type: DELETE_SUGGESTIONS,
        payload: request
    }
}
