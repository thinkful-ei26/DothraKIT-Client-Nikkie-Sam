import {
    FETCH_OVERALLPROGRESS_REQUEST,
    FETCH_OVERALLPROGRESS_SUCCESS,
    FETCH_OVERALLPROGRESS_ERROR,
  
} from '../actions/overallProgress';

const initialState = {
    error: null,
    loading: false,
    data: 0,
    displayFeedback: false,
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_OVERALLPROGRESS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_OVERALLPROGRESS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    }
    else if (action.type === FETCH_OVERALLPROGRESS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } 
    return state;
}
