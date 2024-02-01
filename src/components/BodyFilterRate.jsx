import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

                      // Reconcilation Algo
 const [listOfRestro, setListOfRes] = useState(resList);
      // This is array destructuring          useState returns an array
    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={() => {
          // Filter logic here
          const filteredList = listOfRestro.filter(
            (res)=> res.info.avgRating > 4
            ); 
           setListOfRes(filteredList);
        }} 
        
        >Top rated restaurant</button>
        </div>
        <div className="res-container">
        
        {listOfRestro.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        </div>
      </div>
    );
  };

  export default Body;