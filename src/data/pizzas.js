import Napolitana from '../assets/images/napolitana.png';
import Hawaiana from '../assets/images/hawaiana.png';
import Pepperoni from '../assets/images/pepperoni.png';
import Espanola from '../assets/images/espanola.png';
import Peperoni from '../assets/images/peperoni.png';

export const pizzas = [
  {
    id: 'napolitana',
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: Napolitana,
  },
  {
    id: 'hawaiana',
    name: 'Hawaiana',
    price: 6950,
    ingredients: ['mozzarella', 'piña', 'jamón'],
    img: Hawaiana,
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: Pepperoni,
  },
  {
    id: 'espanola',
    name: 'Española',
    price: 7250,
    ingredients: ['mozzarella', 'chorizo', 'pimentón', 'aceitunas'],
    img: Espanola,
  },
  {
    id: 'cuatro-quesos',
    name: 'Cuatro Quesos',
    price: 7450,
    ingredients: ['mozzarella', 'gouda', 'parmesano', 'queso azul'],
    img: Peperoni,
  },
  {
    id: 'vegetariana',
    name: 'Vegetariana',
    price: 6450,
    ingredients: ['mozzarella', 'champiñones', 'pimentón', 'aceitunas'],
    img: Napolitana,
  },
];

export const pizzaCart = [
  {
    id: 'napolitana',
    name: 'Napolitana',
    price: 5950,
    count: 2,
    img: Napolitana,
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    price: 6950,
    count: 1,
    img: Pepperoni,
  },
  {
    id: 'hawaiana',
    name: 'Hawaiana',
    price: 6950,
    count: 1,
    img: Hawaiana,
  },
];
