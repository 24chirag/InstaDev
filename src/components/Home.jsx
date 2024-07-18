import React from "react";

function Home() {
  return (
    <>
      <div
        id="myCarousel"
        class="carousel slide mb-6"
        data-bs-ride="carousel"
        style={{ Height: "20%" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class=""
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item active carousel-item-start"
            style={{ height: "450px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1720469918563-8e586cdf81d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="bd-placeholder-img"
              width="100%"
              height="100%"
            ></img>

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>InstaDev</h1>
                <p class="opacity-75">
                  your developing partner and also help in networking
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            class="carousel-item carousel-item-next carousel-item-start"
            style={{ height: "450px" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="bd-placeholder-img"
              width="100%"
              height="100%"
            ></img>
            <div class="container">
              <div class="carousel-caption">
                <h1>Visit us for more DevPosts</h1>
                <p>I work in tech: Should I always be upskilling?</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "450px" }}>
            <img
              src="https://images.unsplash.com/photo-1720811118401-0c947249988c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
              class="bd-placeholder-img"
              width="100%"
              height="100%"
            ></img>

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Obsolescence can be pushed down the road, but not forever</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div
        class="row featurette "
        style={{
          marginTop: "80px",
          marginLeft: "30px",
          marginRight: "30px",
          padding: "20px",
          marginBottom: "80px",
        }}
      >
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Hiee this is InstaDev{" "}
            <span class=" text-primary">It’ll blow your mind.</span>
          </h2>
          <p class="lead">Conclusion: Upskill now to avoid paying later</p>
        </div>
        <div class="col-md-5" style={{ minheight: "200px" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1720885651762-f589032d160e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid "
            width="500"
            height="200px"
          ></img>
        </div>
      </div>
      <div
        class="row flex-lg-row-reverse align-items-center g-5 py-5"
        style={{
          marginTop: "80px",
          marginLeft: "30px",
          marginRight: "30px",
          padding: "20px",
          marginBottom: "80px",
        }}
      >
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold  lh-1 mb-3 text-light">
            Tech Blogs are Here Devs!!!
          </h1>
          <p class="lead">
            There are really only two options to avoid getting stuck without
            having done upskilling: do it on the clock or off the clock.
            Unfortunately, there’s really no other option! Few people prefer the
            latter, since it’s uncompensated, and it’s hard to spend the whole
            day working then having to study in your downtime. Ideally, you want
            to find a job where the company supports upskilling during work
            hours.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
