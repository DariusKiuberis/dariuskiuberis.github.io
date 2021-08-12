import { combineReducers } from 'redux'
import { getPostsReducer } from './PostReducer'
import { peopleReducer } from './PeopleReducer'

const rootReducer = combineReducers({
    posts: getPostsReducer,
    people: peopleReducer,
})

export default rootReducer
