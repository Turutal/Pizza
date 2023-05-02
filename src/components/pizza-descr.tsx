import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PizzaDescr = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://6426a7d1d24d7e0de474d5c4.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h1>{pizza.title}</h1>
      <p>{pizza.price} ₽</p>
    </div>
  );
};

export default PizzaDescr;
