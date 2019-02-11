import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <Router basename="/">
        <App />
    </Router>,
    document.getElementById('root'))


