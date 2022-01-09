import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
   _state: {
      profilePage: {
         newPostText: 'react s very cool',
         posts: [
            { id: 1, message: 'Hi, how are you ?', likesCount: 12 },
            { id: 2, message: 'It is my first post', likesCount: 0 },
            { id: 3, message: 'sdgvds ', likesCount: 23 },
            { id: 4, message: '31453452345', likesCount: 10 },
            { id: 5, message: 'eawf aweg w35y ', likesCount: 7 },
            { id: 6, message: 'q34 t43yt ', likesCount: 3 }
         ],
      },

      messagesPage: {
         dialogs: [
            { id: 1, name: 'Илья(admin)' },
            { id: 2, name: 'Отэц(admin)' },
            { id: 3, name: 'User1' },
            { id: 4, name: 'User2' },
            { id: 5, name: 'User3' },
            { id: 6, name: 'User4' },
         ],

         messages: [
            { id: 1, message: 'message1' },
            { id: 2, message: 'message2' },
            { id: 3, message: 'message3' },
            { id: 4, message: 'message4' },
            { id: 5, message: 'message5' },
            { id: 6, message: 'message6' },
         ],

         newMessageBody: ""
      },

      sidebar:{}
   },
   _callSubscriber() {
      console.log('State changed')
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage,action);
      this._state.messagesPage = messageReducer(this._state.messagesPage,action);
      this._state.sidebar = sideBarReducer(this._state.sidebar,action);
      this._callSubscriber(this._state);
   },
}










export default store;
window.store = store;