import { createContext, useState } from 'react';

const CartContext = createContext({
  getProducts: function () {},
  getCheckout: function () {},
  setProduct: function (product, quantity) {},
  deleteProduct: function (product) {},
  getNumberProducts: function () {},
});

export function CartContextProvider(props) {
  const [products, setProducts] = useState([]);

  function getProductsHandler() {
    return products;
  }

  function setProductHandler(newProduct, quantity) {
    const index = products.findIndex((product) => {
      if (product.id === newProduct.id) {
        return true;
      }

      return false;
    });

    let temp = [...products];
    if (index >= 0) {
      temp[index].quantity = quantity;
    } else {
      temp.push({ ...newProduct, quantity: quantity });
    }

    setProducts(temp);
  }

  function deleteProductHandler(product) {
    const temp = [...products];

    const filtered = temp.filter((value, index, array) => {
      return value.id !== product.id;
    });

    setProducts(filtered);
  }

  function getNumberProductsHandler() {
    let number = 0;
    products.forEach((product) => {
      number += product.quantity;
    });
    return number;
  }

  function getCheckoutHandler() {
    let subTotal = 0;
    let shipping;
    let total;

    products.forEach((product) => {
      subTotal += product.quantity * product.price;
    });

    if (subTotal >= 250) {
      shipping = 0;
    } else {
      shipping = getNumberProductsHandler() * 10;
    }

    total = subTotal + shipping;

    return {shipping, subTotal, total}
  }

  const context = {
    getProducts: getProductsHandler,
    getCheckout: getCheckoutHandler,
    setProduct: setProductHandler,
    deleteProduct: deleteProductHandler,
    getNumberProducts: getNumberProductsHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
