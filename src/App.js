import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import BellaMax from './components/images/BellaMax.jpeg';
import CharlieSimbar from './components/images/CharlieSimbar.jpeg'
import LeoMilo from './components/images/LeoMilo.jpeg'
import OliverLuna from './components/images/OliverLuna.jpeg';


function App() {
  return (
    <div className= "App">
      <Navbar />
      <Hero />
      <div className='cardSection'>
        <Card 
        img = {BellaMax}
        name = 'Bella Max'
        phone = '+234 701 234 5678'
        email = 'john.doe1234@gmail.com'
        />
        <Card 
        img = {CharlieSimbar}
        name = 'Charlie Simbar'
        phone = '+1 (555) 123-4567'
        email = 'jane.smith5678@yahoo.com'
        />
        <Card 
        img = {LeoMilo}
        name = 'Leo Milo'
        phone = '+44 20 1234 5678'
        email = 'testuser_9876@hotmail.com'
        />
        <Card 
        img = {OliverLuna}
        name = 'Oliver Luna'
        phone = '+81 3 1234 5678'
        email = 'random.email@outlook.com'
        />
      </div>
    </div>
  );
}

export default App;
