import React from 'react';
import './App.css';
import Header from '../components/header/Header'
import MainThing from '../components/mainThing/MainThing';
import Footer from '../components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <MainThing />
      <Footer />
    </div>
  );
}

export default App;
