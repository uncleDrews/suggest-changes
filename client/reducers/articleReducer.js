import {PARSE_ARTICLE} from '../actions';

const initialState = {
    title: '',
    paragraphs: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case PARSE_ARTICLE:
            return action.payload;
        default:
            return state;
            }
}
