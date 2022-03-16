const initialFollowers = require('./data/followers.json')
const initialArticles = require('./data/articles.json')

// init the state and change the state
const Reducer =(state={
    errUpdateInfo:'',
    headlineInfo:'Me know nothing. Me just a puppy',
    success:'',
    location:'',
    user:{},
    followerList: initialFollowers.following,
    articles: initialArticles.articles
},action)=>{
    switch (action.type){
        case 'TO_OUT':
            return {...state,
                location:"LANDING_PAGE",
               }
        case 'TO_MAIN_PAGE':
            return {...state,
                location:"MAIN_PAGE"}
        case 'TO_PROFILE_PAGE':
            return {...state,
                location:"PROFILE_PAGE",
                errUpdateInfo:''}
        case 'UPDATE_HEADLINE':
            return {...state,
                headlineInfo:action.headlineInfo}
        case 'REGISTER':
            return {...state,
                user: action.user}
        case 'LOG_IN':
            return {...state,
                user: action.user}
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: [
                    {
                        author:action.username,
                        text: action.text,
                        timestamp:action.time,
                        picture:action.img
                    },
                    ...state.articles
                ]
            }
        default:
            return state
    }
}
export default Reducer
