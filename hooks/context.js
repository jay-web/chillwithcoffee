import { createContext, useReducer } from "react";
import { storeReducers} from "./storeReducer";
export const StoreContext =  createContext();

const initialState = {
    latLong: "",
    coffeeStores : []
}

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducers, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}