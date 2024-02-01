import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { RestaurantMenuApi } from "../utils/constants";
import RestaurantCategory from "./ResCategory";
import useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //const [resInfo, setResInfo] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // },[]);

  // const fetchMenu = async () => {
  //   const data = await fetch(RestaurantMenuApi + resId);
  //   const json = await data.json();

  //   console.log(json);
  //   setResInfo(json.data);
  // };



  if (resInfo == null) return <Shimmer />;
  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5 ]?.card?.card;
  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?. card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      
       {categories.map((category, index) => (
        // Control Component
        <RestaurantCategory key={category?.card?.card.title} data= {category?.card?.card} 
        showItems = {index == showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}/>
        
       ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) =>(
          <li key={item.card.info.name}>
            {item.card.info.name}-{"Rs. "}
          {item.card.info.price/100}
          </li>
        ))}
        
      </ul> */}

    </div>
  );
};

export default RestaurantMenu;