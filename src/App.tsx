import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import BookList from "./Pages/Tabs/Tabs";
import {Routes, Route} from "react-router-dom";
import Global from "./Pages/Global/Global";
import All from "./Pages/All/All";
import Card from "./Pages/Tabs/Card";

function App() {
  const bookId = "123";
  return (
    <div className="App">
    
      <Header/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/view" element={<BookList/>}/>
        <Route path="/book/:id" element={<Card id={bookId} />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
