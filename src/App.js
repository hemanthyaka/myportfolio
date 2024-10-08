import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import Skills from './Skills';
import TextToSpeech from './Speak'
// import ChatBot from './Chatbot';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <TextToSpeech/>
      {/* <ChatBot/> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
