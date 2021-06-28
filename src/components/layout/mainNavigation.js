import Logo from './logo';
import { Link } from 'react-router-dom';

import classes from './mainNavigation.module.css';
import CartIcon from './cartIcon';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to='/'>Games</Link>
          </li>
          <li>
            <Link to='/cart'>
              <CartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}