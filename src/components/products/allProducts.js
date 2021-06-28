import { useEffect, useState } from 'react';
import classes from './allProducts.module.css';
import ProductsGrid from './productsGrid';
import {
  sortByName,
  sortByScore,
  sortByPrice,
} from '../../helpers/productsHelper';

export default function AllProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(require('../../products/products.json'));
  }, []);

  let sortedProducts;

  if (props.orderBySelected === 'name') {
    sortedProducts = sortByName(products);
  } else if (props.orderBySelected === 'score') {
    sortedProducts = sortByScore(products);
  } else if (props.orderBySelected === 'price') {
    sortedProducts = sortByPrice(products);
  }

  return (
    <section className={classes.products}>
      <h1>Games</h1>
      <ProductsGrid products={sortedProducts || products} />
    </section>
  );
}
