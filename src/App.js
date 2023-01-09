import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import {useState, useEffect } from "react"

function App() {

  let [gig, setGig] = useState([]);

  useEffect(() => {
    async function getGig() {
      const response = await fetch(
        "http://127.0.0.1:8000/air_bnb_backend/gigs_list/"
      );
      const data = await response.json();
      
      setGig(data)
    }
    getGig()
  },[]);

  let gigs = gig.map((g) => {
    if( g.title === "Group Mountain Biking"){
      g.coverImg = "https://res.cloudinary.com/jjconway23/image/upload/v1673268120/brlempbxxercmodxivi4.png"
    }
    else if(g.title === "Learn Wedding Photography"){
      g.coverImg = "https://res.cloudinary.com/jjconway23/image/upload/v1673268168/dyi06vz1rlle9vxxqry7.png"
    }
    else{
      g.coverImg = "https://res.cloudinary.com/jjconway23/image/upload/v1673268174/v2cn0y7swdn5hkifwhra.png"
    }
    return (
      <Card
        id={g.id}
        title={g.title}
        description={g.description}
        price={g.price}
        img={g.coverImg}
        rating={g.rating}
        reviewCount={g.review}
        location={g.location}
        openSpots={g.openSpots}
        key={g.id}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{gigs}</section>
    </>
  );
}

export default App;
