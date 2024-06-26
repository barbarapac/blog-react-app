import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Description from './pages/description/Description';
import './App.css';
import AllPosts from './pages/allposts/AllPosts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/description" element={<Description />} />
        <Route path="/all-posts" element={<AllPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
