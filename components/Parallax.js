import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const ParallaxComponent = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Parallax
      bgImageAlt="the dog"
      strength={600}
      bgImage="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg"
      className="relative h-[18.5rem]  md:h-[54rem] md:mx-16 "
    >
      <div className="h-full flex justify-center items-end h-[18.5rem]  md:h-[54rem] ">
        <div className="w-full h-32 ">
          <AutoplaySlider
            play={true}
            infinite={true}
            bullets={false}
            interval={5000}
            transitionDelay={100}
            className="text-white aws-btn bg-black opacity-80 h-full text-2xl"
          >
            <div className="">
              <div className="">
                <h2 className="text-center">
                  Working together towards a brighter future
                </h2>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2 className="text-center">Support Works Consulting</h2>
              </div>
            </div>
          </AutoplaySlider>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;
