// store.js
import { createStore } from "redux";
import formReducer from "./ReducerForm";

const store = createStore(formReducer);

export default store;
