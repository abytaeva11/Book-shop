import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// import Info from "./Pages/Info/Info";
import BookList from "./Pages/Tabs/UserItems";
import {Routes, Route} from "react-router-dom";
import Global from "./Pages/Global/Global";
import All from "./Pages/All/All";
import Info from "./Pages/Info/Info";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/view" element={<BookList/>}/>
      </Routes>
        {/*<Info/>*/}
      <Footer/>
    </div>
  );
}

export default App;
