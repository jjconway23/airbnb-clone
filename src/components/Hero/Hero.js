import "./Hero.css";
import heroImage from "../../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img className="hero-image" src="https://res.cloudinary.com/jjconway23/image/upload/v1673268681/photo-grid_pgszpu.png"/>
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
