import rootReducer from "./store/reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore } from "redux";

const reduxStore = ()=>{
    const store = createStore(rootReducer)
    const pesisstore = persistStore(store);

    return {
        store,
        pesisstore
    }
}

export default reduxStore

