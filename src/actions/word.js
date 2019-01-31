import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_WORD_REQUEST = 'FETCH_WORD_REQUEST';
export const fetchWordRequest = () => ({
    type: FETCH_WORD_REQUEST,
});

export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
export const fetchWordSuccess = data => ({
    type: FETCH_WORD_SUCCESS,
    data
});

export const FETCH_WORD_ERROR = 'FETCH_WORD_ERROR';
export const fetchWordError = error => ({
    type: FETCH_WORD_ERROR,
    error
});

export const fetchWord = (id) => (dispatch, getState) => {
    console.log('FETCHING WORD ACTION');
    const authToken = getState().auth.authToken;
    dispatch(fetchWordRequest())
    return fetch(`${API_BASE_URL}/word/${id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchWordSuccess(data)))
        .catch(err => {
            dispatch(fetchWordError(err));
        });
};

export const GUESS_WORD_SUCCESS = 'GUESS_WORD_SUCCESS';
export const guessWordSuccess = (bool, individualWordScore) => ({
    type: GUESS_WORD_SUCCESS,
    bool,
    individualWordScore
});

export const DISPLAY_FEEDBACK = 'DISPLAY_FEEDBACK';
export const displayFeedback = (bool) => ({
    type: DISPLAY_FEEDBACK,
    bool,
});

export const GUESS_WORD_ERROR = 'GUESS_WORD_ERROR';
export const guessWordError = error => ({
    type: GUESS_WORD_ERROR,
    error
});

export const GUESS_WORD_REQUEST = 'GUESS_WORD_REQUEST';
export const guessWordRequest = () => ({
    type: GUESS_WORD_REQUEST,
});

export const guessWord = (id, answer) => (dispatch, getState) => {
    console.log('GUESSING WORD ACTION SENDING', JSON.stringify(answer) );
    const authToken = getState().auth.authToken;
    dispatch(guessWordRequest());
    return fetch(`${API_BASE_URL}/word/${id}`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({answer: answer})     
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res)=>{
            console.log('THE INDIV SCORE GOTTEN BACK IS',res.individualWordScore )
            dispatch(guessWordSuccess(res.answerCorrect, res.individualWordScore))
        })
        .catch(err => {
            dispatch(guessWordError(err));
        });
};

