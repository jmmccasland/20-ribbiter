import { combineReducers } from 'redux';
import userResource from './resources/user';
import postResource from './resources/post';

export default combineReducers({
  users: userResource.reducer,
  post: postResource.reducer,
});
