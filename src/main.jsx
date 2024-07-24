import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';
import Loading from './Loading';
import "./index.css"
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={Router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
