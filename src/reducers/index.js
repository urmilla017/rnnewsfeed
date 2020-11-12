import {FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR} from '../actions/action';

const initialState = {
    pending: false,
    news: [],
    error: null
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NEWS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                pending: false,
                news: action.payload
            }
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getNews = state => state.news;
export const getNewsPending = state => state.pending;
export const getNewsError = state => state.error;