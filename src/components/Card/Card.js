import "./Card.css";
import star from "../../images/star.png";



export default function Card({img,rating,reviewCount,country,title,price}){
    return (
        <div className="card">
            <img src={img} className="card-image"/>
            <div className="card-stats">
                <img className="card-star" src={star} />
                <span>{rating}</span>
                <span className="grey">({reviewCount}) • </span>
                <span className="grey">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>

        </div>
    )
}