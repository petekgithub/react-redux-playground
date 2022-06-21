import './App.css';
import React, { Component }  from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';


function App() {
  return (
    <>
      <header className='App-header'>
        <Profile />
        <Login />
        <ChangeColor />
      </header>
    </>
  );
}

export default App;
