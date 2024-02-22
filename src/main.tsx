import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/HomePage.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.tsx'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.tsx'
import { store } from './store/store.ts';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    'path' : '/',
    element : <App></App>,
    children: [
      {
        path : '',
        element : <HomePage></HomePage>
      },
      {
        'path' : '/product/:productId',
        element: <ProductDetailPage></ProductDetailPage>
      },
      {
        'path' : '/checkout',
        element: <CheckoutPage></CheckoutPage>
      }
    ],
    errorElement: <h1>NotFound 404</h1>
  },


]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)