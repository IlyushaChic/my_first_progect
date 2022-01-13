
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};
const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body,
         }
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }],
         };
      default:
         return state;
   }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default messageReducer;