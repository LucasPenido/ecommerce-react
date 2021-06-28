import { Link } from 'react-router-dom';
import classes from './productItem.module.css';

export default function ProductItem(props) {
  const { id, name, price, score, image } = props.product;
  const imagePath = `/assets/${image}`;

  return (
    <Link
      to={{ pathname: `/${id}`, state: props.product }}
      className={classes.link}
    >
      <li className={classes.product}>
        <div className={classes.image}>
          <img src={imagePath} alt={name} />
        </div>
        <div className={classes.content}>
          <h3>{name}</h3>
          <div className={classes.price}>
            <span className={classes.priceSymbol}>R$</span>
            <span>{price}</span>
          </div>
          <p>Score: {score}</p>
        </div>
      </li>
    </Link>
  );
}
