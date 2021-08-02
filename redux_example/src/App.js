import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
    <div style={{ width: "90%", margin: "auto" }}>
      <PostForm />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
