import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import { Provider } from 'react-redux';
import myntraStore from './store/index.js';
import Men from './routes/Men.jsx';
import Kids from './routes/Kids.jsx';
import Women from './routes/Women.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/bag',
        element: <Bag />,
      },
      {
        path: '/men',
        element: <Men />,
      },
      {
        path: '/women',
        element: <Women />,
      },
      {
        path: '/kids',
        element: <Kids />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
