import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
   // const [showItems, setShowItems] = useState(false);
    // Accordian logic
    const handleClick = () => {
        setShowIndex();
    //    setShowItems(!showItems);
    };
    // console.log(data);
    return ( <div>
        <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 text-black">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
            </span>
            <span>🔻</span>

        </div>
        {/* Accordian Body */}
         {showItems && <ItemsList items = {data.itemCards} />}
        </div>
    </div>
    );
};
export default RestaurantCategory;