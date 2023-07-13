import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import DataContext from './context/DataContext.jsx';
import PostContext from './context/PostContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <DataContext>
        <PostContext>
          <App />
        </PostContext>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>,
)
