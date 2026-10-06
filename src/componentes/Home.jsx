import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas';

const Home = () => {
  return (
    <main>
      <Header />

      <div className="container my-5">
        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div className="col-auto" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
