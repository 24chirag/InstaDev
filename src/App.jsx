import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";
import { useState } from "react";
import Home from "./components/Home";

let dummy = [];

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  let [array, setArray] = useState(dummy);
  let handleOnSubmit = (tit, para) => {
    let newPost = {
      title: tit.current.value,
      p: para.current.value,
    };
    setArray([...array, newPost]);
    console.log(newPost);
  };

  return (
    <div className="appcontainer sidebar">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        <div className="content__main" style={{ minHeight: "600px" }}>
          {selectedTab === "Home" ? (
            <Home />
          ) : selectedTab === "addPost" ? (
            <PostList dummy={array} />
          ) : (
            <CreatePost handleOnSubmit={handleOnSubmit} />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
