import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModelSPage from './pages/ModelSPage';
import ModelXPage from './pages/ModelXPage';
import CyberTruckPage from './pages/CybertruckPage';
import App from './App';
import ShopPage from './pages/ShopPage';
import { RecoilRoot } from 'recoil';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: '/model_s',
    element: (
      <App>
        <ModelSPage />
      </App>
    ),
  },
  {
    path: '/model_x',
    element: (
      <App>
        <ModelXPage />
      </App>
    ),
  },
  {
    path: '/cybertruck',
    element: (
      <App>
        <CyberTruckPage />
      </App>
    ),
  },
  {
    path: '/shop',
    element: (
      <App>
        <ShopPage />
      </App>
    ),
  },
  {
    path: '/cart',
    element: (
      <App>
        <CartPage />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
