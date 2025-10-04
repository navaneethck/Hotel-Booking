import { createContext,useContext,useState } from "react";

const selectionContext = createContext();
export const RoomSelectionProvider = ({children})=>{
    const [purple,setPurple]=useState(false);
    const [purple2,setPurple2]=useState(false);
 
    return(
        <selectionContext.Provider value={{purple,setPurple,purple2,setPurple2}}>
            {children}
        </selectionContext.Provider>
    )
};

export const useRoomSeceltionContext = ()=> useContext(selectionContext);