import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialoges.module.css';



const DialogItem = (props) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink className={e => e.isActive ? s.active : s.dialogsItems} to={'/Dialoges/0/' + props.id} >{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return <div className={s.text}>{props.message}</div>

}


const Dialogs = (props) => {

   let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.messages.map(m => <Message message={m.message} />);


   return (
      <div className={s.dialogs} class={s.content1}>
         <div className={s.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div >
   )
}

export default Dialogs;
