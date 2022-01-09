import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialoges.module.css';

const DialogItem = (props) => {
   return (
      <div className={`${s.dialogsItems}`} >

         <NavLink to={'/Dialoges/' + props.id} activeClassName={s.active} >{props.name}</NavLink>
      </div>
   )
}
const Message = (props) => {
   return <div className={s.text}>{props.message}</div>
}
const Dialogs = (props) => {
   let state = props.messagesPage;
   let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
   let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
   let newMessageBody = state.newMessageBody;
   let onSendMessageClick = () => {
      props.sendMessage();
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }

   return (
      <div className={s.dialogs} class={s.content1}>
         <div className={s.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea className={s.text1} value={newMessageBody}
                  placeholder='Enter your message'
                  onChange={onNewMessageChange}
               ></textarea></div>
               <div><button className={s.send} onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div >
   )
}

export default Dialogs;
