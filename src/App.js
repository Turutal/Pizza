import './scss/app.scss';
import Header from './components/header';
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/pizza-block';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Чизбургер-пицца" price={395} />
            <PizzaBlock title="Чизбургер-пицца" price={395} />
            <PizzaBlock title="Чизбургер-пицца" price={395} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
