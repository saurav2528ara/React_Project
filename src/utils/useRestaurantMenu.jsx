import { useEffect, useState } from "react";
import { RestaurantMenuApi } from "./constants";

const useRestaurantMenu = (resId) => {


const [resInfo, setResInfo] = useState(null);

    //fetchdata
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(RestaurantMenuApi + resId);

        const json = await data.json();
        setResInfo(json.data);
    }


    return resInfo;
}
export default useRestaurantMenu;