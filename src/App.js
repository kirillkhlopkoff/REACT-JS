import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Placeholder from './components/Placeholder/Placeholder';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let SomeComponent = () => <Music/>

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' 
        element={<Dialogs 
          state={props.state.dialogsPage} />} />
        <Route path='/profile' element={<Profile state={props.state.profilePage}/> } />
        
        <Route path='/news' element={<News/>} />
        <Route path='/music' Component={SomeComponent} />
        <Route path='/placeholder' Component={Placeholder} />
        <Route path='/settings' Component={Settings} />
      </Routes>
      </div>
    </div>
  );
}


export default App;
