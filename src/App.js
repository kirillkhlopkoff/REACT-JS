import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Placeholder from './components/Placeholder/Placeholder';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' Component={Dialogs} />
        <Route path='/profile' Component={Profile} />
        <Route path='/news' Component={News} />
        <Route path='/music' Component={Music} />
        <Route path='/placeholder' Component={Placeholder} />
        <Route path='/settings' Component={Settings} />
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}


export default App;
