import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createRoutes, RouterProvider, Outlet} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import error from "./components/Error";
import Trouble from "./components/Error";
import RestaurantMenu from "./components/RestroMenuPage";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));



const AppLayout = () => {

  const [userName, setUserName] = useState();

//  Authentication
useEffect(() => {
  // Make an API call and send username and password

  const data = {
    name: "Kumar Saurav",
  };
  setUserName(data.name);
}, []);


  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className = "app">
    <Header /> 
    <Outlet />     
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createRoutes([
  {
    path: "/", element: <AppLayout />, 
    children: [
      {
        path: "/", element: <Body />, 
      },
      {
        path: "/about", element:  <About />,
        // If my path is /about then load my About
      },
      {
        path: "/contact", element: <Contact />,
      }, 
      {
        path: "/grocery", element: <Suspense fallback={<h1>Loading.........</h1>}><Grocery /></Suspense>,
      },    
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />, 
      },
      {
        path: "/cart", element: <Cart/>,
      }
    ],
    errorElement: <Trouble />,
    // If my path is / then load my AppLayout
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
