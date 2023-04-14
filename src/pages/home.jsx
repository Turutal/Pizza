import { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';
import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';

function Home() {
  const dispatch = useDispatch();
  const { activeCategory, sortType, currentPage } = useSelector(
    (state) => state.filter
  );

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = sortType.property.replace('-', '');
    const order = sortType.property.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://6426a7d1d24d7e0de474d5c4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [activeCategory, sortType, searchValue, currentPage]);

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
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}

export default Home;
