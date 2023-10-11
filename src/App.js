import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
