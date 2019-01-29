import {
    FETCH_WORD_REQUEST,
    FETCH_WORD_SUCCESS,
    FETCH_WORD_ERROR,
    GUESS_WORD_ERROR,
    GUESS_WORD_REQUEST
} from '../actions/word';

const initialState = {
    data: {},
    error: null,
    loading: false,
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_WORD_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_WORD_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    }
    else if (action.type === FETCH_WORD_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } 
    else if (action.type === GUESS_WORD_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } 
    else if (action.type === GUESS_WORD_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    }
    return state;
}
