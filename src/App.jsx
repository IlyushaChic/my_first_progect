import './App.css';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (<AuthContext.Provider value={[
    isAuth,
    setIsAuth,
    isLoading,
  ]}>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  </AuthContext.Provider>
  )
=======
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
>>>>>>> 0f0237f42c13db4e098324041906a4086613bd54
}

export default App;






