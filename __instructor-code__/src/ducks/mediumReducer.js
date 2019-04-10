import axios from 'axios';

const initialState = {
  articles: [],
  loading: false
}

const FETCH_MEDIUM_ARTICLES = 'FETCH_MEDIUM_ARTICLES';

export function getMediumArticles() {
  let articles = axios.get('/api/medium').then(res => res.data)
  return {
    type: FETCH_MEDIUM_ARTICLES,
    payload: articles
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEDIUM_ARTICLES + '_PENDING':
      return { ...state, loading: true }
    case FETCH_MEDIUM_ARTICLES + '_FULFILLED':
      return { articles: action.payload, loading: false }
    default:
      return state;
  }
}