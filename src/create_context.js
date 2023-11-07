import { createContext, useContext } from "react";

const storeContext = createContext();

export const Provier = ({store,children})=>{
    return <storeContext.Provider value={store}>
        {children}
    </storeContext.Provider>
}
export const useDispatch = ()=>{
    const {dispatch} = useContext(storeContext);
    if(!dispatch){
        throw new Error("you must to run Provider function first");
    }
    return dispatch
}
export const useSelector = (selector)=>{
    const {getState} = useContext(storeContext);
    if(!getState){
        throw new Error("you must to run Provider function first");
    }
    return selector(getState());
}