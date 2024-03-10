import React, { useEffect, useState } from "react";

const ZoomFadeComponent = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#zoom-component");
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollY = window.scrollY;

      // Check if the scroll position is within the section's boundaries
      if (scrollY >= sectionTop && scrollY <= sectionBottom) {
        // This time, let's make the zoom effect more pronounced at the start
        // and gradually reduce the rate of zoom as we scroll down.
        const zoomIntensity = 2; // Control the intensity of the zoom here
        const newScale =
          1 + Math.min(((scrollY - sectionTop) * zoomIntensity) / 1000, 20); // Limit max scale to 2, adjust as needed

        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="zoom-component"
        className="py-64 relative"
        style={{ height: "400svh" }}
      >
        <div
          className="sticky top-2/4 -translate-y-2/4"
          style={{ transition: "transform 0.2s ease-out" }}
        >
          <h1
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.2s ease-out",
            }}
            className="text-medium-blue text-82 font-bold text-center"
          >
            What We Do?
          </h1>
        </div>
      </div>
    </>
  );
};

export default ZoomFadeComponent;
