import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatur";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () =>{

// Create a useState Variable
const [btnNameReact, setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);
console.log(loggedInUser);

  // Subscribing to the store using a Selector use as a hook
  const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className= "flex justify-between bg-blue-950 shadow-xl m-2 text-white sm:bg-red-800 lg:bg-green-950">
        <div className="logo-container">
          <img className="mx-5 p-1 mt-1 size-20 w-[160px]" src = {LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-2"> <Link to="/">Home</Link></li>
            <li className="px-2"> <Link to="/about">About Us</Link></li>
            <li className="px-2"> <Link to="/contact">Contact Us</Link></li>
            <li className="px-2"> <Link to="/grocery">Grocery</Link></li>
            <li className="px-2 font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="login"
              onClick = {() => {
                setBtnNameReact("Logout");
              }}
              >
              {btnNameReact}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;