import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Container } from 'react-bootstrap';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/bootstrap.min.css';
import './fontawesome';

ReactDOM.render(
    <Container fluid>
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    </Container>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();