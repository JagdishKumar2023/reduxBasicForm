// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./components/StoreForForm";
import Form from "./components/Form";

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

export default App;
