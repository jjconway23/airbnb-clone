import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import gigData from "./data"

function App() {
  let gigs = gigData.map( gig => {
    
    return <Card 
      id={gig.id}
      title={gig.title}
      description={gig.description}
      price={gig.price}
      img={gig.coverImg}
      rating={gig.stats.rating}
      reviewCount={gig.stats.reviewCount}
      location={gig.location}
      openSpots={gig.openSpots}
      key={gig.id}
    />
  })

  return (
   <>
    <Navbar />
    <Hero />
    {gigs}
   </>
  );
}

export default App;