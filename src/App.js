import React, { useState } from "react";
// import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';

import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
