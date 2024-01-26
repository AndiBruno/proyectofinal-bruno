import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Paquetes from './components/Paquetes';
import Quienes from './components/Quienes';

const App = () => {
  return (
    <div>
      <Header />
      <Hero   />
      <Quienes />
      <Paquetes />
      <Contacto />
      <Footer />
      </div>
  )
}

export default App