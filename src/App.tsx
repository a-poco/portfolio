import React from 'react';
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Description/>
      <Avatar />
      <Tools/>
      <Projects/>
    </React.Fragment>
  );
}

export default App;
