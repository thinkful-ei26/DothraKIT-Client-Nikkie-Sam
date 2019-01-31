import {
    FETCH_WORD_REQUEST,
    FETCH_WORD_SUCCESS,
    FETCH_WORD_ERROR,
    GUESS_WORD_ERROR,
    GUESS_WORD_REQUEST,
    GUESS_WORD_SUCCESS,
    DISPLAY_FEEDBACK
} from '../actions/word';

const initialState = {
    data: {},
    error: null,
    loading: false,
    feedback:"",
    individualWordScore: 0,
    displayFeedback: false,
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
    else if (action.type === GUESS_WORD_SUCCESS) {
        console.log('the indiv word score is is', action.individualWordScore);
        return Object.assign({}, state, {
            loading: false,
            error: false,
            feedback: action.bool===true ? "Excellent!" : "You're Wrong!",
            individualWordScore: action.individualWordScore,
            displayFeedback: true,
        });
    } 
    else if (action.type === DISPLAY_FEEDBACK) {
        console.log('DISPLAY FEEDBACK REDUCER', action.bool);
        return Object.assign({}, state, {
            displayFeedback: action.bool
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
