import Navbar from './componentes/Navbar';
import Cart from './componentes/Cart';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
