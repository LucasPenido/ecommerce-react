import ProductItem from './productItem';
import classes from './productsGrid.module.css';

export default function ProductsGrid(props) {
  const { products } = props;

  return (
    <ul className={classes.grid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
