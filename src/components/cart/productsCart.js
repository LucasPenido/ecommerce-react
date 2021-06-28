import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import ProductItemCart from './productItemCart';
import classes from './productsCart.module.css';

export default function ProductsCart() {
  const cartCtx = useContext(CartContext);

  const checkout = cartCtx.getCheckout();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className={classes.cart}>
        <ul className={classes.grid}>
          {cartCtx.getProducts().map((product) => (
            <ProductItemCart product={product} />
          ))}
        </ul>
      </div>
      <div className={classes.checkout}>
        <h4>Items ({cartCtx.getNumberProducts()})</h4>
        <h4>Subtotal: R$ {checkout.subTotal}</h4>
        <h4>Shipping: R$ {checkout.shipping}</h4>
        <h2>Total: R$ {checkout.total}</h2>
      </div>
    </div>
  );
}
