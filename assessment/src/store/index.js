import { combineReducers } from 'redux';
import currentUserReducer from './currentUser.js'
import postsReducer from './posts.js'

const rootReducer = combineReducers(
  {
    user: currentUserReducer,
    posts: postsReducer
  }
)

export default rootReducer