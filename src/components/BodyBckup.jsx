import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={() => {
          // Filter logic here
          resList = resList.filter(
            (res)=> res.info.avgRating > 4
            ); 
            console.log(resList);
        }} 
        
        >Top rated restaurant</button>
        </div>
        <div className="res-container">
        
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        </div>
      </div>
    );
  };

  export default Body;