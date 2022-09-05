import React from "react";
import Card from "./Card";
import Data from "../Data";
import "./Gallery.css"

export default function Gallery(){
   const cards = Data.map(item =>{
    return(
      
    <div>
        <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        />
      </div>
    )
   })
   return(
  
    <div className="gallery">
      {cards}
    </div>
   )
    
}