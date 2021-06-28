import { useContext } from 'react';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContext from '../../store/CartContext';

export default function CartIcon() {
  const cartCtx = useContext(CartContext);
  const numberProducts = cartCtx.getNumberProducts();

  return (
    <div>
      <Badge color='secondary' badgeContent={numberProducts}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
}
