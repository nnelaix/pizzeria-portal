import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}> New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/:id`}> Order id</Link>
  </div>
);

export default Waiter;