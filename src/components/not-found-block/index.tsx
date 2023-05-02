import React from 'react';
import styles from './not-found-block.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
    </div>
  );
}

export default NotFoundBlock;
