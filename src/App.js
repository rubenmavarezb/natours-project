import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Tours from './components/Tours/Tours';
import Stories from './components/Stories/Stories';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Main/>
      <Features/>
      <Tours/>
      <Stories/>
      <Booking/>
      <Footer/>
    </>
  );
}

export default App;
