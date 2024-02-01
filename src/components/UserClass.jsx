import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // create State Variable
        this.state = {
            userInfo: {
                name:"Dummy",
                email:"dummy@gmail.com",
                phone:"899877",
                Address:"Default",
                location:"Default",
            },
            // count: 0,
        };
        
    }

    async componentDidMount(){
       const data= await fetch("https://api.github.com/users/saurav2528ara");
       const json = await data.json();

        // To Update state variable 
            this.setState({
                userInfo: json,
            });
       console.log(json);  
        this.timer = setInterval(() => {
            console.log("Hello Reconcilation");
        }, 1000);

        console.log("component Did Mount");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }

    render() {

        const {name,email,phone,Address,login} = this.state.userInfo;
        return (
        <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
            onClick={() => {
                // With the help of setState we can update value of set variable
                this.setState({
                    count: this.state.count+1,
                });
            }}
            >
                Count Increase
            </button> */}
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{phone}</h3>
        <h4>{Address}</h4>
        <h4>{login}</h4>
        <img src="https://avatars.githubusercontent.com/u/90957348?v=4"/>
            </div>
        );
    }
}
export default UserClass;