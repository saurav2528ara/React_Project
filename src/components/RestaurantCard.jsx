
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const styleCard = {
        backgroundColor: "#f0f0f0"
      }
  
  const {cloudinaryImageId,name,avgRatingString,cuisines,costForTwo,deliveryTime} = resData?. info;
  
    return (
      <div className="p-2 m-2 w-[200px] rounded-xl bg-gray-200 hover:bg-gray-400">
            <img
              className="rounded-xl"
              alt="res-logo"
              src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Minutes</h4>
          </div>
    );
  };
    // Higher Order Component
    export const withPromotedLabel = (RestaurantCard) =>{
      return (props) => { // Return a new component
        // Inside this, component return some peice of JSX
        return(
          <div>
            <label className="absolute bg-black text-white">Promoted</label>
            <RestaurantCard {...props}/> {/* ... means Spread Operator**/}
          </div>
        );
      };
    };

  export default RestaurantCard;
 