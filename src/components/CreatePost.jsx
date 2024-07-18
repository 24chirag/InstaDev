import React, { useRef } from "react";

function CreatePost({ handleOnSubmit }) {
  let tit = useRef();
  let para = useRef();

  return (
    <>
      <h2 className="text-center my-4">
        Welcome TO InstaDev || where Developer Share Their Thoughts
      </h2>
      <form style={{ minHeight: "550px" }}>
        <div class="mb-3 text-center my-4">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{
              width: "60%",
              marginLeft: "20%",
              height: "80px",
              fontSize: "30px",
            }}
            ref={tit}
          />
          <div id="emailHelp" class="form-text text-light">
            Happy Day!!
          </div>
        </div>

        <div class="mb-3 text-center">
          <label for="exampleInputPassword1" class="form-label">
            Enter Your Text
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            style={{
              width: "60%",
              marginLeft: "20%",
              height: "80px",
              fontSize: "30px",
            }}
            ref={para}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary "
          style={{ marginLeft: "47%" }}
          onClick={() => {
            handleOnSubmit(tit, para);
            (tit.current.value = ""), (para.current.value = "");
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
