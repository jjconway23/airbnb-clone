import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import katie from "./images/katie-zaferes.png";

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <Card 
        img={katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
    /> 
   </>
  );
}

export default App;
