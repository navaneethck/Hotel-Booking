import { createContext ,useContext, useEffect, useState} from "react";

const UserContext = createContext();

export const UserProvider =({children})=>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const response = await fetch( `${import.meta.env.VITE_API_URI}/api/auth/me`,{
                    method:'GET',
                    credentials:'include'
                });
                if(response.ok){
                    const data = await response.json();
                    setUser(data.user);
                }

            }catch(err){

                console.log('error fetching user',err)

            }finally{
                setLoading(false);
            }
        }

        fetchUser();
    },[])

    return(
        <UserContext.Provider value={{user,setUser,loading}}>

            {children}

        </UserContext.Provider>
    )

}

export const UseUserContext = ()=> useContext(UserContext);

