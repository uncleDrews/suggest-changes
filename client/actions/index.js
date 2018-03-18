import {get, post, put, del} from "./baseApi";

export const PARSE_ARTICLE = 'PARSE_ARTICLE';

export function getParsedParagraphs(url) {
    const request = get(`article-parse`);
    return {
        type: PARSE_ARTICLE,
        payload: request
    }
}