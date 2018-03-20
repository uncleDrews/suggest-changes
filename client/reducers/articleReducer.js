import {PARSE_ARTICLE} from '../actions';

const initialState = {
    title: '',
    paragraphs: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case PARSE_ARTICLE:
            console.log(action.payload);
            return action.payload;
            }
    return state;
}
