import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../helpers/productsHelper';
import CartContext from '../../store/CartContext';
import Notification from '../ui/notification';

import classes from './productDetail.module.css';

export default function ProductDetail({ match }) {
  const location = useLocation();
  const quantityRef = useRef('');
  const cartCtx = useContext(CartContext);
  const [notification, setNotification] = useState();

  useEffect(() => {
    if (notification?.status === 'success' || notification?.status === 'error') {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  let product = {};

  if (location.state) {
    product = location.state;
  } else {
    product = getProduct(match.params.productId);
  }

  const imagePath = `/assets/${product.image}`;

  function formHandler(event) {
    event.preventDefault();

    cartCtx.setProduct(product, Number(quantityRef.current.value));
    setNotification({
      status: 'success',
      title: 'Product added to cart.',
      message: '',
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={imagePath} alt={product.name} />
      </div>
      <form className={classes.middleBox} onSubmit={formHandler}>
        <h2>{product.name}</h2>
        <h4>Price: R${product.price}</h4>
        <h4>Score: {product.score}</h4>
        <div className={classes.control}>
          <label htmlFor='quantity'>Quantity: </label>
          <input
            type='text'
            id='quantity'
            name='quantity'
            defaultValue='1'
            ref={quantityRef}
            required
          />
        </div>
        {quantityRef.current.value === '0' ? (
          <p className={classes.error}>Please enter quantity of 1 or more</p>
        ) : null}
        <div className={classes.button}>
          <button>
            Add to cart <img src='/assets/cart-icon.svg' alt='shopping cart' />
          </button>
        </div>
      </form>
      {console.log(notification)}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
  );
}
