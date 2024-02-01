import { useEffect, useState } from "react";

useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    // EventListner keep track of when the internet is online or offline
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);

        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    },[]);
    return onlineStatus;  
};
export default useOnlineStatus;