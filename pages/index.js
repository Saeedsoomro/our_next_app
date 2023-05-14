import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layouts/layout";
import { Container } from "postcss";
import ParallaxContainer from "../components/Parallax";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [val, setVal] = useState();
  const [openServiceCard, setOpenServiceCard] = useState("none");
  return (
    <>
      <Layout>
        <ParallaxContainer />
        <div id="about" className="text-center py-10 bg-graylight">
          <h1 className="text-4xl  pb-10 font-roboto text-graydark">
            AS SEEN IN
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:px-20 lg:px-60 2xl:px-80 ">
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
          </div>
        </div>
        <div className=" text-center px-10 md:px-20 lg:px-60 2xl:px-80  md:py-10">
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Flexible Interior Design Services. Accessible Luxury.
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            We are a luxury interior design firm based in Downtown Katy; serving
            all of Houston and surrounding areas. We help busy families and
            individuals like you, achieve your ideal version of luxurious
            living; blending it seamlessly with practicality and your lifestyle
            needs.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark ">
            We meet you wherever you are in your pursuit of an ideal home. Lack
            of time or lack of a trust fund should not stand in the way of you
            living your best life in your home.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark ">
            ​ We bring creative solutions, expert execution and outstanding
            results to every project we touch. We take a heart-centered approach
            to design and will work hard to bring your vision to life. We obsess
            about the details, because the details are what make for a dynamic
            and unique design.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark ">
            We are diligent about guiding you through the many choices and
            decisions, and help you avoid costly mistakes.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Our menu of flexible design services means that you can have luxury
            interior design by a top Houston design firm at a price point that
            works for you.
          </p>
          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            Let's Talk Style
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark">
            Your preferred style is important to us; whatever your style is. We
            create spaces that will address your functional needs, but we also
            want it to speak to your personality and aesthetic vision.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            While most of our clients seek us out for our bold, unique and
            well-layered interiors, we welcome every genre of design styles,
            from mid century modern to new traditional, and everything in
            between
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            The basis of our designs can be summed up as eclectic, storied,
            classic, bold, timeless, thoughtful, with the masterful use of
            color, pattern-mix and textures.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Will you be next?
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Let's get started with creating your ideal version of luxury in your
            home
          </p>
        </div>
        <div className="text-center">
          <button className="bg-red-400 px-5 py-2 font-samibold text-white font-noto hover:text-blaxk uppercase">
            let's talk about our project
          </button>

          <div className="px-10 md:px-20 lg:px-40 2xl:px-60 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card1"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.M2gm-z7jGsS9zC5KC5pmbwHaIm&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card1")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight  absolute bottom-10 "
                  >
                    Shop The Room
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    <h1 class="text-3xl font-semibold">The King's Man</h1>
                    <p class="my-2">9.0 Rating</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis itaque assumenda saepe animi maxime libero non
                      quasi, odit natus veritatis enim culpa nam inventore
                      doloribus quidem temporibus amet velit accusamus.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card2"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.jOxRE3HQun6L5EQqxc45IwHaLH&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card2")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight absolute bottom-10 "
                  >
                    Shop The Room
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    <h1 class="text-3xl font-semibold">The King's Man</h1>
                    <p class="my-2">9.0 Rating</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis itaque assumenda saepe animi maxime libero non
                      quasi, odit natus veritatis enim culpa nam inventore
                      doloribus quidem temporibus amet velit accusamus.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card3"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.sgJoK9FsH-Wvp9uRER8JjAHaJ6&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card3")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight shadow absolute bottom-10 "
                  >
                    Shop The Room
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    <h1 class="text-3xl font-semibold">The King's Man</h1>
                    <p class="my-2">9.0 Rating</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis itaque assumenda saepe animi maxime libero non
                      quasi, odit natus veritatis enim culpa nam inventore
                      doloribus quidem temporibus amet velit accusamus.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="h-full w-full bg-no-repeat bg-cover opacity-10 text-center absolute top-0"
            style={{
              backgroundImage:
                "url('https://tse2.mm.bing.net/th?id=OIP.mLUJw_huvTCMPb0bqIixjAHaFK&pid=Api&P=0')",
            }}
          >
            the
          </div>
          <div className="px-10 md:px-20 lg:px-60 2xl:px-80  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 text-center   ">
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto ">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
              </p>
              <button className="uppercase border text-xl  px-2 py-1 my-5">
                our process
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
                process while remaining flexible and adaptive to your specific
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                our process
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
                process while remaining flexible and adaptive to your specific
                needs. We take care of every detail so you don't have to
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                our process
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
                process while remaining flexible and adaptive to your specific
                needs. We take care of every detail so you don't have to
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                our process
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
                process while remaining flexible and adaptive to your specific
                needs. We take care of every detail so you don't have to
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                our process
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2 " src="assets/images/home.png" />
              <p className="font-roboto">
                Designing your home is streamlined and easy with our proven
                design process. We save you time and money. We manage the entire
                process while remaining flexible and adaptive to your specific
                needs. We take care of every detail so you don't have to
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5 ">
                our process
              </button>
            </div>
          </div>
        </div>

        <div className=" md:px-20 lg:px-60 2xl:px-80 mt-10 md:mt-20">
          <div className="bg-[url('https://tse4.mm.bing.net/th?id=OIP.wK8KjOjCkpE1fblJkTPsQwHaEW&pid=Api&P=0')]  hover:bg-[url('https://tse3.mm.bing.net/th?id=OIP.uQPMykkDg8jY9zuwFdbO5gHaFW&pid=Api&P=0')] bg-no-repeat bg-center bg-cover relative h-[20rem] md:h-[35rem]">
            <div className="border border-gray p-2 absolute top-1/2 mx-5 md:mx-20 lg:mx-40  bg-white bg-opacity-30  ">
              <div className="border border-gray text-center p-10 md:p-10 bg-white bg-gray bg-opacity-90">
                <h1 className=" text-3xl md:text-5xl  font-noto text-black uppercase font-bold border-b-2 inline px-5">
                  the blog
                </h1>
                <p className="font-bold font-roboto mt-10 mb-2">
                  Ever wonder what's involved in hiring an interior designer?
                </p>
                <p className=" mb-2 font-roboto">
                  Follow our blog, Lux Living Weekly to learn the behind the
                  scenes of working with an interior designer. Our blog is
                  dedicated to opening the conversation, transparency and taking
                  the mystery out of the design process.
                </p>
                <p className=" mb-2 font-roboto">
                  We also share tons of inspiration through our room tours, lots
                  of design tips and ideas to get you started on your very own
                  design project
                </p>
                <button className="px-5 py-2 border mt-4 uppercase hover:bg-blue">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen"></div>
      </Layout>
    </>
  );
}
