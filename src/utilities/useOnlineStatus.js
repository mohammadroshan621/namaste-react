import { useEffect } from "react";
import { useState } from "react";
const useOnlineStautus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);


    useEffect(() =>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);

        })
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });

    },[]);

    return onlineStatus;
};

export default useOnlineStautus;