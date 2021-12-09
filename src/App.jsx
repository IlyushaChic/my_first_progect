import React, { } from 'react';
import './App.css';


import Dialogs from './components/Dialoges/Dialoges';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';





const App = (props) => {


 
  return (
    <BrowserRouter>



      <div className='app-wrapper'>
        <Header />
        <NavBar />


        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/Dialoges/:id" element={<Dialogs  dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path="/Dialoges/:id/:id" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path="/Profile" element={<Profile  posts={props.posts}/>} />
            <Route path="/Music" element={<Music />} />
            <Route path="/News" element={<News />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes >

        </div>

      </div>
    </BrowserRouter>
  );
}






export default App;
