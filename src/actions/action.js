export const FETCH_NEWS_PENDING = 'FETCH_NEWS_PENDING';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

export const fetchNewsPending = () => {
    type: FETCH_NEWS_PENDING
}


export const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    news: news
});

export const fetchNewsError = (error) => ({
    type: FETCH_NEWS_ERROR,
    error: error
});