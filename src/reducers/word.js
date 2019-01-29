import {
    FETCH_WORD_SUCCESS,
    FETCH_WORD_ERROR
} from '../actions/word';

const initialState = {
    data: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_WORD_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_WORD_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
