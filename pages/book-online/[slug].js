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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "../../components/calendar/Time";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const BookingCalender = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [appointment, setAppointment] = useState({});
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [showTime, setShowTime] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { query } = router;
  const { slug } = query;

  const onChange = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SCHEDULE_ADD_APPOINTMENT", payload: { date } });
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
        <form>
          <div className="grid grid-cols-3 gap-14 text-left">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl text-black">Select a Date and Time</h2>
                <hr className="my-4 text-gray" />
              </div>
              <div className="flex">
                <div>
                  <Calendar
                    activeStartDate={new Date(2023, 0, 5)}
                    // defaultView={Views.year}
                    // formatDay={(locale, date) => formatDate(date, "d")}
                    onChange={onChange}
                    value={date}
                    onClickDay={() => setShowTime(true)}
                  />
                  {console.log(date)}
                </div>
                <div className="ml-10 ">
                  {date.length > 0 ? (
                    <p>
                      <span>Start:</span> {date[0].toDateString()}
                      &nbsp; to &nbsp;
                      <span>End:</span> {date[1].toDateString()}
                    </p>
                  ) : (
                    <p>
                      <span className="text-black">Default selected date:</span>{" "}
                      {date.toDateString()}
                    </p>
                  )}
                  <p className="text-black">No availability</p>

                  <Time setTime = {setTime} showTime={showTime} date={date} />

                  <button className="hover:cursor-pointer mt-10 bg-gray-400 px-10 py-2 text-white">
                    Check Next Availability
                  </button>
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

              <button
                onClick={onSubmit}
                className="w-full  bg-black text-white text-xl py-2 "
              >
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
