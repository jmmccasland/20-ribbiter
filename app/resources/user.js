import createResource from 'redux-thunk-rest';

export default createResource('user', {
  url: 'http://ribbiterapi.herokuapp.com/users',
});


//  do i need this ?
// Using the reducers
// const reducer = combineReducers({
//   users: userResource.reducer,
// });
//
// // Using the action creator
// // const findAll = bookResource.actionCreators.findAll
// const { actionCreators: { findAll } } = userResource;
//
// store.dispatch(findAll());
