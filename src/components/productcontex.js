import { useContext } from "react";
import { createContext } from "react";

const AppContext =createContext();
const AppProvider = ({children}) => {
    return (<AppContext.Provider value={{myName:'raj'}}>
        {children}
    </AppContext.Provider>)
};
const useProductContext = () =>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductContext};