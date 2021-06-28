import classes from './logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/'>
      <div className={classes.logo}>Game Store</div>
    </Link>
  );
}
