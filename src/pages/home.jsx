import { useEffect, useState, useContext } from 'react';

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue } = useContext(SearchContext);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    property: 'popularity',
  });

  const category = activeCategory > 0 ? `category=${activeCategory}` : '';
  const sortBy = sortType.property.replace('-', '');
  const order = sortType.property.includes('-') ? 'asc' : 'desc';
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6426a7d1d24d7e0de474d5c4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, sortType, searchValue, currentPage]);

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategory}
          onChangeCategory={(i) => setActiveCategory(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas}
      </div>
      <Pagination onChangePageCount={(count) => setCurrentPage(count)} />
    </>
  );
}

export default Home;
