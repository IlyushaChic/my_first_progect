import React, { } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialoges/DialogesContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/Dialoges" component={DialogsContainer} />
        <Route path="/Profile/:userId?" component={ProfileContainer} />
        <Route path="/login" component={Login} />
        <Route path="/Users" component={UsersContainer} />
        <Route path="/Music" component={Music} />
        <Route path="/News" component={News} />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
