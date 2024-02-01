import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import React,{ useState, useEffect, useContext} from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatur";
import UserContext from "../utils/userContext";

const Body = () => {

                      // Reconcilation Algo
 const [listOfRestro, setListOfRes] = useState([]);
      // This is array destructuring          useState returns an array

 const [filteredRestaurant, setFilteredRestaurant] = useState([]);
// Create another state variable for filtered restro

 const [searchText, setSearchText] = useState("");

 const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

      useEffect(() => {
        fetchData();
      },[]);

      const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
        const json = await data.json();
  
        console.log(json);
      // update list of restro
      setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      // also update Filtered restro
      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      // it is called Optional Chaining
      };

      const onlineStatus = useOnlineStatus();
      if(onlineStatus == false) return (
        <h1>Looks like you are offline!!!;</h1>
      );


        const {loggedInUser,setUserName} = useContext(UserContext);

      if(listOfRestro.length ===0){
        return <Shimmer />;
      };  


    return (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border border-solid border border-black" value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button className="m-3  bg-black text-white px-1 py-1 rounded-lg" onClick={() => {
              //Filter the restraunt card and update the UI
              console.log(searchText);

              const filteredRestaurant=listOfRestro.filter((res)=> 
              res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          
          </div>
          <div className="search  flex items-center">
          <button className="px-1 py-1 bg-black text-white rounded-lg" 
          onClick={() => {
          // Filter logic here
          const filteredList = listOfRestro.filter(
            (res)=> res.info.avgRating > 4
            ); 
           setListOfRes(filteredList);
        }} 
        
        >Top rated restaurant</button>
          </div>

          <div className="search  flex items-center">
            <label className="mx-4">UserName :</label>
          <input className="border border-black p-2"
          value = {loggedInUser} 
          onChange={(e)=> setUserName(e.target.value)}  />
          </div>
        
        </div>
        <div className="flex flex-wrap">
         {/* to display on the UI we using filteredRestaurant */}
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} 
          to={"/restaurants/"+restaurant.info.id}
          >
            {/* {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />} */}
  
            <RestaurantCard  resData={restaurant} /></Link>
        ))}  

        </div>
      </div>
    );
  };

  export default Body;