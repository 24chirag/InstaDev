import React from "react";

function Post(props) {
  return (
    <>
      <div class="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X1DYYOX4JGLTZV0jjexNGAHaEK%26pid%3DApi&f=1&ipt=45fda8497c31ee134139408f2922af97b6966d705601d776c7750d9a16977939&ipo=images"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.p}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Post;
