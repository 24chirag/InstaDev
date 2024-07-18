import React from "react";
import Post from "./Post";

function PostList({ dummy }) {
  return (
    <>
      {" "}
      <div
        className="container d-flex"
        style={{
          marginLeft: "8px",
          padding: "50px",
          justifyContent: "space-around",
        }}
      >
        {dummy.map((item) => (
          <Post title={item.title} p={item.p} />
        ))}
      </div>
    </>
  );
}

export default PostList;
