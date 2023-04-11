import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

const Pagination = ({ onChangePageCount }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePageCount(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
