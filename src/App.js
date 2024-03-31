// App.js
// import Form from "./components/Form";
import React from "react";
// import store from "./components/StoreForForm";
import { Provider } from "react-redux";
import FormRedux from "./components/ReducerForm";
import store from "./ReduxPractices/StoreRedux";

const App = () => (
  <Provider store={store}>
    <FormRedux />
  </Provider>
);

export default App;
