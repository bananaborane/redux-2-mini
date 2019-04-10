import axios from 'axios';


const initialState = {
    loading: false,
    articles: []
}

// action types
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

// action creators / action builders
export function requestArticles(){
    let articles = axios.get('/api/hacker-news')
    .then(res => { return res.data })
    .catch(err=>console.log(err))

    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }

} // automatically dispatches to the store when invoked

export default function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_ARTICLES + '_PENDING': // the MIDDLEWARE SLAPS ON the '_PENDING' if the promise doesnt return anything yet (???)
            return {...state, loading: true}
        case REQUEST_ARTICLES + '_FULFILLED': // the MIDDLEWARE SLAPS ON the '_FULFILLED' if the promise returns a response 
        ////            GOT TO SPELL IT RIGHT
            return { articles: action.payload, loading: false }
        case REQUEST_ARTICLES + '_REJECTED':
            return { ...state, loading: false }
        default:
            return state;
    }
}

