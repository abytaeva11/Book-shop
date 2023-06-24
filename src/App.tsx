import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// import Info from "./Pages/Info/Info";
import BookList from "./Pages/Tabs/UserItems";

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
        <Footer/>
      {/*<Info/>*/}
        <BookList/>
    </div>
  );
}

export default App;
