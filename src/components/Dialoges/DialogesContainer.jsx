import React, { } from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/message-reducer';
import Dialogs from './Dialoges';

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageCreator())
      },
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
