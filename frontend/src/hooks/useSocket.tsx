import { useEffect } from "react";
import  { io }  from "socket.io-client";

const useSocket = () => {
 
    useEffect(() => {
        const socket   = io("ws://localhost:8000");

        // dispatch(setSocketRef(socketRef.current))
    }, [])


    return {}
}

export default useSocket