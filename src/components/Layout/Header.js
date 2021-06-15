import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Kent's Foods</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

    </Fragment>
  );
};

export default Header;
