import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from './not-found';
import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination';
import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.pizzas);
  const { activeCategory, sortType, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    const getPizzas = async () => {
      const category = activeCategory > 0 ? `category=${activeCategory}` : '';
      const sortBy = sortType.property.replace('-', '');
      const order = sortType.property.includes('-') ? 'asc' : 'desc';
      const search = searchValue ? `&search=${searchValue}` : '';

      dispatch(fetchPizzas({ category, sortBy, order, search, currentPage }));
      window.moveTo(0, 0);
    };

    getPizzas();
  }, [activeCategory, searchValue, currentPage, sortType.property]);

  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const onChangeCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategory}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      {status === 'error' ? (
        <NotFound />
      ) : (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
      )}
    </>
  );
}

export default Home;
