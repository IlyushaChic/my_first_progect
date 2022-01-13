import qwer from '../assets/images/batman.png';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you ?', likesCount: 12 },
      { id: 2, message: 'It is my first post', likesCount: 0 },
      { id: 3, message: 'sdgvds ', likesCount: 23 },
      { id: 4, message: '31453452345', likesCount: 10 },
      { id: 5, message: 'eawf aweg w35y ', likesCount: 7 },
      { id: 6, message: 'q34 t43yt ', likesCount: 3 }
   ],
   newPostText: 'react s very cool',
   profile: null,
   profile: {
      photos:{
         large: qwer
      }
   },
   };

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }
      default:
         return state;
   }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,profile  })
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;