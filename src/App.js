import React, { useState } from "react";
import './App.scss';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [ page, setPage ] = useState('About Me');
  const checkPage = () => {
    if (page === 'About Me'){
      return <AboutMe /> 
    } else if (page === 'Contact') {
      return <Contact />
    } else if (page === 'Resume') {
      return <Resume />
    } else if (page === 'Portfolio') {
      return <Portfolio />
    } else { return <h1>Something went wrong!</h1>}
  }; 
  return (
    <div className="App">
      <Header setPage={setPage} />
      {checkPage()}
      <Footer />
    </div>
  );
}

export default App;
