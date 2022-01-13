import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import{combineReducers, createStore}  from 'redux';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messageReducer,
   sidebar: sideBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
});
let store = createStore(reducers);

export default store;

