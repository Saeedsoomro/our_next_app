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

const BookAppointment = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [appointment, setAppointment] = useState({});
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { query } = router;
  const { slug } = query;

  useEffect(() => {
    const appoint = Appointments.find((item) => {
      return item.slug == slug;
    });
    dispatch({ type: "SERVICE_ADD_APPOINTMENT", payload: appoint });
    setAppointment(appoint);
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, [slug]);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      name: appointment.name,
      price: appointment.price,
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <Layout>
      <div className="px-10 md:px-20 lg:px-60 2xl:px-40">
        <div className="my-14">
          <button
            onClick={() => router.back()}
            className="text-lg flex items-center text-black"
          >
            <FcPrevious /> Back
          </button>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-14 text-left">
            <div className="col-span-2">
              <h1 className="text-2xl text-black font-samibold pb-2 mb-4 border-b-2 border-gray ">
                Fill out your details
              </h1>
              <p>Tell us a bit about yourself</p>
              <div>
                <iframe
                  src={appointment?.calenderUrl}
                  width="100%"
                  height="600"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-2xl text-black font-samibold pb-2 border-b-2 border-gray ">
                Service Details
              </h1>
              <div className="py-6 border-b-2 border-gray">
                <h2 className="text-xl">{appointment?.name}</h2>
                <p className="text-graydark ">
                  By phone <br /> Support Work <br /> {appointment?.time}
                </p>
              </div>
              <div className="py-6">
                <h1 className="text-xl">Payment Details</h1>
                <p className="text-graydark ">{appointment?.price}</p>
              </div>
              {appointment?.price !== "free" && (
                <button
                  onClick={redirectToCheckout}
                  disabled={redirecting}
                  className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4  w-full"
                >
                  {redirecting ? "Redirecting..." : "Go to Checkout"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;
