import React from "react";
import Img from '../images/image1.png'
import star from '../images/Star.png'
import './Card.css'

export default function Card(){
    return(
    <section className="card--main">
        <img src={Img} alt="card" />

        <div className="card--star">
        <img src={star} alt="star" />
        <span>5.0</span>
        <span>(6)</span>
        <span>USA</span>
        </div>
        <div className="card--p">
        <p>Life lessons with Katie Zaferes</p>
        </div>
        <div className="card--price">
        <span>From $136 / person</span>
        </div>

    </section>
    )
}