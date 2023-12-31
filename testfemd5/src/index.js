import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import ProductDetail from "./ProductDetail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes >
            <Route path={'/'} element={<App/>}/>
            <Route path={'/create'} element={<Create/>}/>
            <Route path={'/detail/:id'} element={<ProductDetail/>}/>
            <Route path={'/update/:id'} element={<Update/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function.
// to log results (for example: reportWebVitals(console.log))
// Or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
