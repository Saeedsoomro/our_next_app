import Layout from "@/components/Layouts/layout";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import getStripe from "../../utlils/get-stripe";
import { Appointments } from "@/utlils/data";
import { Store } from "../../utlils/store";
import { FcPrevious } from "react-icons/fc";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const BookingCalender = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [appointment, setAppointment] = useState({});
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { query } = router;
  const { slug } = query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "USER_ADD_APPOINTMENT", payload: data });
    console.log(state);

    // router.push("/thank-you-page");
  };

  useEffect(() => {
    const appoint = Appointments.find((item) => {
      return item.slug == slug;
    });
    dispatch({ type: "SERVICE_ADD_APPOINTMENT", payload: appoint });
    setAppointment(appoint);

    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);
    // if (query.get("success")) {
    //   console.log("Order placed! You will receive an email confirmation.");
    // }
    // if (query.get("canceled")) {
    //   console.log(
    //     "Order canceled -- continue to shop around and checkout when you’re ready."
    //   );
    // }
  }, [slug]);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      name: "t-shirt",
      price: "3000",
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <Layout>
      <div className="px-10 md:px-20 lg:px-60 2xl:px-80">
        <div className="my-14">
          <button
            onClick={() => router.back()}
            className="text-lg flex items-center text-black"
          >
            <FcPrevious /> Back
          </button>
          {/* <button
            onClick={redirectToCheckout}
            disabled={redirecting}
            className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
          >
            {redirecting ? "Redirecting..." : "Go to Checkout"}
          </button> */}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-14 text-left">
            <div className="col-span-2">
              <h1 className="text-2xl text-black font-samibold pb-2 mb-4 border-b-2 border-gray ">
                Fill out your details
              </h1>
              <p>Tell us a bit about yourself</p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col ">
                  <label htmlFor="name" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "This field is required",
                      maxLength: {
                        value: 100,
                        message: "Should be less than 100",
                      },
                    })}
                  />
                  {<p className="text-red-400"> {errors.name?.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="email" className="block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: "Enter valid email",
                      },
                    })}
                  />
                  {<p className="text-red-400"> {errors.email?.message}</p>}
                </div>
                <div className="flex flex-col  col-span-2">
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                  />
                  {<p className="text-red-400"> {errors.phone?.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="hearAbout" className="block mb-2">
                    How Did You Hear About Us?*
                  </label>
                  <input
                    type="text"
                    id="hearAbout"
                    {...register("hearAbout", {
                      required: "This field is required",
                    })}
                  />
                  {<p className="text-red-400"> {errors.hearAbout?.message}</p>}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="emailList" className="block mb-2">
                    How Did You Hear About Us?*
                  </label>
                  <input
                    type="text"
                    id="emailList"
                    {...register("emailList", {
                      required: "This field is required",
                    })}
                  />
                  {<p className="text-red-400"> {errors.emailList?.message}</p>}
                </div>
                <div className="flex flex-col  col-span-2">
                  <label htmlFor="discription" className="block mb-2">
                    Tell Us Briefly About Your Design Needs *
                  </label>
                  <textarea
                    type="text"
                    id="discription"
                    {...register("discription", {
                      required: "This field is required",
                    })}
                  />
                  {
                    <p className="text-red-400">
                      {errors.discription?.message}
                    </p>
                  }
                </div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-2xl text-black font-samibold pb-2 border-b-2 border-gray ">
                Service Details
              </h1>
              <div className="py-6 border-b-2 border-gray">
                <h2 className="text-xl">
                  {appointment?.name} <br /> May 18, 2023 at 12:00 am
                </h2>
                <p className="text-graydark ">
                  By phone <br /> Veronica Solomon <br /> {appointment?.time}
                </p>
              </div>
              <div className="py-6">
                <h1 className="text-xl">Payment Details</h1>
                <p className="text-graydark ">{appointment?.price}</p>
              </div>

              <button className="w-full  bg-black text-white text-xl py-2 ">
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default BookingCalender;
