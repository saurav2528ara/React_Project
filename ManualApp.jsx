import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
  return (
    <div className= "header">
      <div>
        <img className="logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo " alt = "res-logo" src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e554c893e09e1bb60f6c52e8373e0e08"></img>
      <h3>Green Hostel</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.3 Star</h4>
      <h4>30 Minutes</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      </div>
    </div>
  )
}


const AppLayout = () => {
  return(
    <div className = "app">
    <Header /> 
    <Body/>     
    </div>
  )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);