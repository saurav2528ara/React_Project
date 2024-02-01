import User from "./User";
import UserClass from "./UserClass";
import React, {Component} from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
    constructor(props){
        super(props);

        //console.log("Paretn Constructor");
    }

    componentDidMount(){
        //console.log("Parent Componet Did Mount");
    }

    render() {
        //console.log("Parent render");
    return (   
        <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                {({loggedInUser}) => (
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}    
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Kumar Saurav (functional)"} email={"saurav2011ara@gmail.com"} phone={'9523454255'} Address={"Kg Road,Nawada,Arrah,Bihar 802301"} /> */}

            <UserClass name={"Kumar Saurav (Class Based)"}  email={"saurav2011ara@gmail.com"} phone={'9523454255'} Address={"Kg Road,Nawada,Arrah,Bihar 802301"}/>
        </div>
    );
    }
};

export default About;