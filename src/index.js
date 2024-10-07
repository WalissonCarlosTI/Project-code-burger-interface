import React from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './routes/routes';
import { ToastContainer } from "react-toastify";
import { UserProvider } from './hooks/UserContext';

import GlobalStyles from './styles/globalStyles';


const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <UserProvider>
            <Routes />
        </UserProvider>
        <ToastContainer autoClose={3000} theme="colored" />

        <GlobalStyles />
    </>
);