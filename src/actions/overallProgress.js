import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SET_OVERALL_FEEDBACK = 'SET_OVERALL_FEEDBACK';
export const setOverallProgress = () => ({
    type: SET_OVERALL_FEEDBACK,
});

export const FETCH_OVERALLPROGRESS_REQUEST = 'FETCH_OVERALLPROGRESS_REQUEST';
export const fetchOverallProgressRequest = () => ({
    type: FETCH_OVERALLPROGRESS_REQUEST,
});

export const FETCH_OVERALLPROGRESS_SUCCESS = 'FETCH_OVERALLPROGRESS_SUCCESS';
export const fetchOverallProgressSuccess = data => ({
    type: FETCH_OVERALLPROGRESS_SUCCESS,
    data
});

export const FETCH_OVERALLPROGRESS_ERROR = 'FETCH_OVERALLPROGRESS_ERROR';
export const fetchOverallProgressError = error => ({
    type: FETCH_OVERALLPROGRESS_ERROR,
    error
});

export const fetchOverallProgress = (id) => (dispatch, getState) => {
    // console.log('FETCHING OVERALLPROGRESS ACTION');
    const authToken = getState().auth.authToken;
    dispatch(fetchOverallProgressRequest())
    return fetch(`${API_BASE_URL}/overallProgress/${id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => dispatch(fetchOverallProgressSuccess(data)))
        .catch(err => {
            dispatch(fetchOverallProgressError(err));
        });
};