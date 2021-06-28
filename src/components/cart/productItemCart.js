import { useContext, useRef } from 'react';
import CartContext from '../../store/CartContext';
import classes from './productsCart.module.css';

export default function ProductItemCart({ product }) {
  const quantityRef = useRef();
  const cartCtx = useContext(CartContext);

  function onChangeHandler() {
    const quantity = quantityRef.current.value;

    if (!isNaN(Number(quantity)) && Number(quantity) > 0 ) {
      cartCtx.setProduct(product, Number(quantity));
    }
  }

  function onClickHandler() {
    cartCtx.deleteProduct(product);
  }

  return (
    <li key={product.id}>
      <div className={classes.image}>
        <img src={`/assets/${product.image}`} alt={product.name} />
      </div>
      <div className={classes.content}>
        <div className={classes.details}>
          <h3>{product.name}</h3>
          <h3>Score: {product.score}</h3>
        </div>
        <div className={classes.control}>
          <h3>
            <label htmlFor='quantity'>Quantity: </label>
            <input
              type='text'
              id='quantity'
              name='quantity'
              defaultValue={product.quantity}
              onChange={onChangeHandler}
              ref={quantityRef}
              required
            />
          </h3>
        </div>
        <div className={classes.price}>
          <h3>R$ {product.price * product.quantity}</h3>
        </div>
      </div>
      <button onClick={onClickHandler}>Delete</button>
    </li>
  );
}
