import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext=createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}){
    const [user,setUser]=useState(null);
    const [ready,setReady]=useState(false);
    useEffect(()=>{
        if(!user){
            axios.get('/profile')
            setReady(true);
        }
    },[])
    return(
        <UserContext.Provider value={{user,setUser,ready}}>
            {children}

        </UserContext.Provider>
        
    );
}  