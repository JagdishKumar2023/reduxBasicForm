// store.js
import { createStore } from "redux";
import rootReducer from "./ReducerForm";

const store = createStore(rootReducer);

export default store;
