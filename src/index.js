import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Products from './pages/Products';
import cart from './pages/Cart';
import Layout from './components/layout/layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/cart' component={cart} />
            <Route path='/:productId' component={Product} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
