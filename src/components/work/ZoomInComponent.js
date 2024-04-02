import React from "react";

export const ZoomInComponent = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        class="home-concept hidden-mobile hidden-sm hidden-xs aos-init aos-animate"
      >
        <div class="container">
          <div class="row center">
            <span class="sun"></span>
            <span class="cloud" style={{ top: "48.68px" }}></span>
            <div class="col-md-2 col-md-offset-1">
              <div
                class="process-image appear-animation bounceIn appear-animation-visible"
                data-appear-animation="bounceIn"
              >
                <img
                  loading="lazy"
                  src="https://www.elexoft.com/assets/img/home-concept-item-1.png"
                  alt="best software house in wah cantt"
                />
                <strong>Strategy</strong>
              </div>
            </div>
            <div class="col-md-2">
              <div
                class="process-image appear-animation bounceIn appear-animation-visible"
                data-appear-animation="bounceIn"
                data-appear-animation-delay="200"
                // style={"animation-delay: 200ms;"}
              >
                <img
                  loading="lazy"
                  src="https://www.elexoft.com/assets/img/home-concept-item-2.png"
                  alt="best software house in wah cantt"
                />
                <strong>Planning</strong>
              </div>
            </div>
            <div class="col-md-2">
              <div
                class="process-image appear-animation bounceIn appear-animation-visible"
                data-appear-animation="bounceIn"
                data-appear-animation-delay="400"
                // style="animation-delay: 400ms;"
              >
                <img
                  loading="lazy"
                  src="https://www.elexoft.com/assets/img/home-concept-item-3.png"
                  alt="best software house in wah cantt"
                />
                <strong>Build</strong>
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <div class="project-image">
                <div id="fcSlideshow" class="fc-slideshow">
                  <ul class="fc-slides">
                    <li style={{ display: "none" }}>
                      <a href="portfolio-single-small-slider.html">
                        <img
                          loading="lazy"
                          class="img-responsive"
                          src="https://www.elexoft.com/assets/img/projects/project-home-1.jpg"
                          alt="best software house in wah cantt"
                        />
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      <a href="portfolio-single-small-slider.html">
                        <img
                          loading="lazy"
                          class="img-responsive"
                          src="https://www.elexoft.com/assets/img/projects/project-home-2.jpg"
                          alt="best software house in wah cantt"
                        />
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      <a href="portfolio-single-small-slider.html">
                        <img
                          loading="lazy"
                          class="img-responsive"
                          src="https://www.elexoft.com/assets/img/projects/project-home-3.jpg"
                          alt="best software house in wah cantt"
                        />
                      </a>
                    </li>
                  </ul>
                  <nav>
                    <div class="fc-left">
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="fa fa-arrow-left"></i>
                    </div>
                    <div class="fc-right">
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </nav>
                  <div
                    class="fc-flip"
                    style={{
                      transition: "transform 700ms ease-out",
                      transform: "rotate3d(1, 1, 0, 180deg)",
                      display: "block",
                    }}
                  >
                    <div class="fc-front">
                      <div>
                        <a href="portfolio-single-small-slider.html">
                          <img
                            loading="lazy"
                            class="img-responsive"
                            src="https://www.elexoft.com/assets/img/projects/project-home-3.jpg"
                            alt="best software house in wah cantt"
                          />
                        </a>
                      </div>
                      <div
                        class="fc-overlay-light"
                        style={{
                          transition: "opacity 538.462ms",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      class="fc-back"
                      style={{ transform: "rotate3d(1, 1, 0, 180deg)" }}
                    >
                      <div>
                        <a href="portfolio-single-small-slider.html">
                          <img
                            loading="lazy"
                            class="img-responsive"
                            src="https://www.elexoft.com/assets/img/projects/project-home-1.jpg"
                            alt="best software house in wah cantt"
                          />
                        </a>
                      </div>
                      <div
                        class="fc-overlay-dark"
                        style={{
                          opacity: "0",
                          transition: "opacity 538.462ms",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <strong class="our-work">Our Work</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
