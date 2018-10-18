import React, { Component } from 'react';
import Main from './components/Main';
import Navbar from './components/navbar/Navbar';
import { Link } from 'react-router-dom'

const App = () => (
    <div className="App">
        <Navbar />
        <div className="container">
            <Main />
        </div>
    </div>
)

export default App;
