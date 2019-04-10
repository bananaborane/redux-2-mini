import axios from 'axios';

const initState = {
    articles: [],
    loading: false
}

const FETCH_REDDIT_ARTICLES = 'FETCH_REDDIT_ARTICLES';

export function getRedditArticles(){
    let articles = axios.get('/api/reddit')
    .then(res => { return res.data })
    .catch(err=>console.log(err))

    return {
        type: FETCH_REDDIT_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initState, action){
    switch (action.type){
        case FETCH_REDDIT_ARTICLES + '_PENDING':
        return { ...state, loading: true }
      case FETCH_REDDIT_ARTICLES + '_FULFILLED':
        return { articles: action.payload, loading: false }
    case FETCH_REDDIT_ARTICLES + '_REJECTED':
        return {...state, loading: false}
      default:
        return state;
    }
}









