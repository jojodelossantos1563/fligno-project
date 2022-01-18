import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/"; 
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
