import React from 'react';
import { createRoot } from 'react-dom/client';

import Login from "./containers/Login";
import Register from "./containers/Register";
import { ToastContainer } from "react-toastify";

import GlobalStyles from './styles/globalStyles';


const root = createRoot(document.getElementById('root'));
root.render(
    <>
    <Login/>
    <ToastContainer autoClose={2000}/>
    
    <GlobalStyles/>
    </>
);