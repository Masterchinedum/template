import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import CardX from './components/CardX.jsx';
import BellaMax from './components/images/BellaMax.jpeg';
import CharlieSimbar from './components/images/CharlieSimbar.jpeg'
import LeoMilo from './components/images/LeoMilo.jpeg'
import OliverLuna from './components/images/OliverLuna.jpeg';
import experiences from './components/data';



function App() {
  
let myexperiences = experiences.map((experience) => {
  return (
    <CardX 
    img = {experience.img}
    title = {experience.title}
    star = {experience.star}
    voteNumber = {experience.voteNumber}
    location = {experience.location}
    cost = {experience.cost}
    />
  );
}) 
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
      <div className='cardSection'>
      {myexperiences}
      </div>
      {console.log('experiences:', experiences)};
    </div>
  );
}


export default App;



/* <CardX 
img = {BellaMax}
title = 'Travel Teaching Home'
star = '120'
voteNumber = '88'
location = 'USA'
cost = '1,858'
/>
<CardX
img = {CharlieSimbar}
title = 'Christmas Holiday parrol'
star = '201'
voteNumber = '968'
location = 'NG'
cost = '709'
/>
<CardX 
img = {LeoMilo}
title = 'Liking the transition'
star = '10'
voteNumber = '818'
location = 'NG'
cost = '608'
/>
<CardX 
img = {OliverLuna}
title = 'Oliver Luna'
star = '20'
voteNumber = '88'
location = 'NG'
cost = '578'
/> */