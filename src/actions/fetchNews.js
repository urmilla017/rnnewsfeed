import {fetchNewsPending, fetchNewsSuccess, fetchNewsError} from './action';

function fetchNews(url, feedName) {
    return dispatch => {
        dispatch(fetchNewsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchNewsSuccess(res.news));
            let jsonData = [];
            let respData = {};
          
            for (let i = 0; i < responseData.items.length; i++) {
                respData = {
                feedName: feedName,
                title: responseData.items[i].title,
                date: responseData.items[i].pubDate.substr(0,responseData.items[i].pubDate.indexOf(' ')),
                time: responseData.items[i].pubDate.substr(responseData.items[i].pubDate.indexOf(' ')+1),
                desc: responseData.items[i].description,
                link: responseData.items[i].link
                }
                jsonData.push(respData);
            }

            const sorted = jsonData.sort((a, b) => {
                const aDate = new Date(a.date + ' ' + a.time)
                const bDate = new Date(b.date + ' ' + b.time)
                return bDate.getTime() - aDate.getTime()
            });

            const data = {
                [feedName]: sorted
            }
                return data;
        })
        .catch(error => {
            dispatch(fetchNewsError(error));
        })
    }
}

export default fetchNews;