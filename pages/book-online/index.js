import Layout from "@/components/Layouts/layout";
import ServiceBox from "@/components/ServiceBox";
import React from "react";
import { Appointments, AppointmentsSupervision } from "@/utlils/data";
import { AppointmentsSchool } from "@/utlils/data";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

const BookNow = () => {
  return (
    <>
      <Layout>
        <div className=" md:px-20 lg:px-60 2xl:px-80  my-2">
          <div className="bg-[url('https://tse3.mm.bing.net/th?id=OIP.uQPMykkDg8jY9zuwFdbO5gHaFW&pid=Api&P=0')]  hover:bg-[url('https://tse4.mm.bing.net/th?id=OIP.M2gm-z7jGsS9zC5KC5pmbwHaIm&pid=Api&P=0')] bg-no-repeat bg-cover bg-center relative h-[20rem] md:h-[30rem]">
            <div className="border border-gray p-2 absolute top-2/3 mx-5 md:mx-20 lg:mx-40 2xl:mx-52 bg-white bg-opacity-30  ">
              <div className="border border-gray text-center p-5 md:p-10 bg-white bg-gray bg-opacity-90">
                <p className="text-2xl font-bold  ">Signature</p>
                <h1 className="text-4xl text-black font-bold my-8  ">
                  Schedule A Consultation
                </h1>
                <p className="my-4 px-20  text-xl">
                  Let's Get The Ball Rolling On Your Ideal Version Of Luxury
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-10 md:px-20 lg:px-60 2xl:px-80 mt-96 md:mt-48 text-center ">
          <p className=" text-xl my-4">
            How exciting! You are ready to talk about your dreams, goals and
            vision for your ideal home. We are ready to listen.
          </p>
          <p className=" text-xl my-4">Let's get started!.</p>
          <p className=" text-xl my-4">
            ​ You can either book a FREE Discovery Call, where Veronica will
            discuss your project over the phone, ask you some questions to
            determine your needs and how we can help.
          </p>
          <p className=" text-xl my-4">OR</p>
          <p className=" text-xl my-4">
            You can fill out the information form below as thoroughly as
            possible, and Veronica will be in touch with you to discuss your
            project.
          </p>
          <p className=" text-xl my-4">Ready to dive right in?</p>
          <p className=" text-xl my-4">
            Book your in home consultation for guidance for a DIY project, or
            the first step to our turn-key full service project.
          </p>
        </div>

        {/* <div className="px-10 md:px-20 lg:px-60 2xl:px-80 text-center"> */}
        <div className="px-10 md:px-10 lg:px-10 text-center">
          <h1 className="text-3xl md:text-4xl text-black font-bold my-12 md:pt-20 ">
            Book An Appointment
          </h1>
          <h1 className="text-xl md:text-2xl text-black font-bold my-12 md:pt-10">
            Family Consultation
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // slidesPerView={5} // Number of slides to show in PC
            spaceBetween={80} // Space between slides
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 70, // Number of slides to show in iPad
              },
              390: {
                slidesPerView: 1, // Number of slides to show in mobile
              },
              1000: {
                slidesPerView: 3, //PC
              },
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "> */}
            {Appointments.map((item) => (
              <SwiperSlide className="w-screen">
                <ServiceBox key={item.slug} item={item} />
              </SwiperSlide>
            ))}
            {/* </div> */}
          </Swiper>

          <h1 className="text-xl md:text-2xl text-black font-bold my-12 md:pt-10">
            School Consultation
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // slidesPerView={5} // Number of slides to show in PC
            spaceBetween={80} // Space between slides
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 70, // Number of slides to show in iPad
              },
              390: {
                slidesPerView: 1, // Number of slides to show in mobile
              },
              1000: {
                slidesPerView: 3, //PC
              },
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "> */}
            {AppointmentsSchool.map((item) => (
              <SwiperSlide className="w-screen">
                <ServiceBox key={item.slug} item={item} />
              </SwiperSlide>
            ))}
            {/* </div> */}
          </Swiper>
          <h1 className="text-xl md:text-2xl text-black font-bold my-12 md:pt-10">
            RBT\Qasp-s\ABA therapists Supervision
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
            {AppointmentsSupervision.map((item) => (
              <ServiceBox key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BookNow;
