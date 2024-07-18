import React from "react";

function Footer() {
  return (
    <>
      <div class="bg-dark-600 text-light px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">Thanks For Coming</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Canny people look at job postings and recognise the value
              proposition of a role is larger than the salary figure. In the
              United States, healthcare coverage is always a big thing in
              people’s minds, and around the world it can be pensions and
              holiday leave. However in tech, it’s also important to look for
              the ability to advance your knowledge of technology, instead of
              being stuck in a position that is static. That might take the form
              of dedicated learning time, but it’s also very important for the
              day-to-day role to include building your experience with relevant
              technology.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Contact Us
              </button>
              <button type="button" class="btn btn-outline-light btn-lg px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
