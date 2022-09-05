import React from "react";

import star from '../images/Star.png'
import './Card.css'

export default function Card(props){
    return(
    <section className="card--main">
        <img className="card--image" src={props.img} alt="card" />

        <div className="card--star">
        <img src={star} alt="star" />
        <span>{props.rating}</span>
        <span>({props.reviewCount})</span>
        <span>{props.location}</span>
        </div>
        <div className="card--p">
        <p>{props.title}</p>
        </div>
        <div className="card--price">
        <span>From ${props.price}/person</span>
        </div>

    </section>
    )
}