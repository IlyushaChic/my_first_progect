import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  { id: 1, name: 'Илья(admin)' },
  { id: 2, name: 'Отэц(admin)' },
  { id: 3, name: 'User1' },
  { id: 4, name: 'User2' },
  { id: 5, name: 'User3' },
  { id: 6, name: 'User4' },
]

let messages = [
  { id: 1, message: 'message1' },
  { id: 2, message: 'message2' },
  { id: 3, message: 'message3' },
  { id: 4, message: 'message4' },
  { id: 5, message: 'message5' },
  { id: 6, message: 'message6' },
]


let posts = [
  { id: 1, message: 'Hi, how are you ?', likesCount: 12 },
  { id: 2, message: 'It is my first post', likesCount: 0 },
  { id: 3, message: 'sdgvds ', likesCount: 23 },
  { id: 4, message: '31453452345', likesCount: 10 },
  { id: 5, message: 'eawf aweg w35y ', likesCount: 7 },
  { id: 6, message: 'q34 t43yt ', likesCount: 3 }
] 

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}  dialogs = {dialogs} messages= {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();















