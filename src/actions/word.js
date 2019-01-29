import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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
    const authToken = getState().auth.authToken;
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
