import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import sendEmail from "@/utlils/sendMail";

const Footer = () => {
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
    loading: false,
  });
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, desc } = data;
    try {
      setResponseMessage({
        loading: true,
        isSuccessful: false,
        message: "",
      });
      const req = await sendEmail(name, email, desc);
      //  axios({
      //   method: "post",
      //   url: "/api/contact",
      //   data: {
      //     email: data.email,
      //     name: data.name,
      //     message: data.desc,
      //   },
      // });
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };
  setTimeout(() => {
    setResponseMessage({
      isSuccessful: false,
    });
  }, 10000);
  return (
    <div id="contact" className="mt-10">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-slate-200  text-xl text-center py-10">
        <div>
          <h3 className="text-black text-2xl font-bold my-3">Catagories</h3>
          <div className="flex flex-col text-slate-500 ">
            <Link href="#/" className="leading-10 hover:underline">
              Graphic & Design
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Digital Marketing
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Writing & Translation
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Video & Animation
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Music & Audio
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Programming & Tech
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Business
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Lifestyle
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Photography
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Sitemap
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-black text-2xl font-bold my-3">About</h3>
          <div className="flex flex-col text-slate-500">
            <Link href="#/" className="leading-10 hover:underline">
              Careers
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Press & News
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Partnerships
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Terms of Service
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Intellectual Property Claims
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Investor Relations
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-black text-2xl font-bold my-3">Support</h3>
          <div className="flex flex-col text-slate-500">
            <Link href="#/" className="leading-10 hover:underline">
              Help & Support
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Trust & Safety
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              GSelling on Fiverr
            </Link>
            <Link href="#/" className="leading-10 hover:underline">
              Buying on Fiverr
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center flex-col">
          <h3 className="text-black text-10xs font-bold my-3">Community</h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link href ="#/" className="leading-10 hover:underline">
              Customer Success Stories
            </Link>
            <Link href ="#/" className="leading-10 hover:underline">Community Hub</Link>
            <Link href ="#/" className="leading-10 hover:underline">Forum</Link>
            <Link href ="#/" className="leading-10 hover:underline">Events</Link>
            <Link href ="#/" className="leading-10 hover:underline">Blog</Link>
            <Link href ="#/" className="leading-10 hover:underline">Influencers</Link>
            <Link href ="#/" className="leading-10 hover:underline">Affiliates</Link>
            <Link href ="#/" className="leading-10 hover:underline">Podcast</Link>
            <Link href ="#/" className="leading-10 hover:underline">Invite a Friend</Link>
            <Link href ="#/" className="leading-10 hover:underline">Become a Seller</Link>
            <Link href ="#/" className="leading-10 hover:underline">
              Community Standards
            </Link>
          </div>
        </div> */}

        {/* <div className="flex items-center flex-col">
          <h3 className="text-black text-10xs font-bold my-3">
            More From Fiverr
          </h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link href ="#/" className="leading-10 hover:underline">Fiverr Pro</Link>
            <Link href ="#/" className="leading-10 hover:underline">
              Fiverr Logo Maker
            </Link>
            <Link href ="#/" className="leading-10 hover:underline">Fiverr Guides</Link>
            <Link href ="#/" className="leading-10 hover:underline">Fiverr Select</Link>
            <Link href ="#/" className="leading-10 hover:underline">ClearVoice</Link>
            <Link href ="#/" className="leading-10 hover:underline">Fiverr Workspace</Link>
            <Link href ="#/" className="leading-10 hover:underline">Learn</Link>
            <Link href ="#/" className="leading-10 hover:underline">
              Working Not Working
            </Link>
          </div>
        </div> */}

        <div className="mx-10 ">
          <div>
            <h1 className="text-black text-2xl font-bold my-3">Contact Me</h1>
          </div>
          <p className="bg-green-200 w-full text-center">
            {responseMessage.isSuccessful ? responseMessage.message : ""}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="my-3 p-3 w-full rounded border-none "
              placeholder="Your Name..."
              {...register("name", {
                required: "This field is required",
                maxLength: {
                  value: 100,
                  message: "Should be less than 100",
                },
              })}
            />
            {<p className="text-red-400"> {errors.name?.message}</p>}
            <input
              type="text"
              className="my-3 p-3 w-full rounded border-none"
              placeholder="Your Email..."
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Enter valid email",
                },
              })}
            />
            {<p className="text-red-400"> {errors.email?.message}</p>}
            <textarea
              className="w-full my-3 rounded border-none p-3"
              name=""
              id=""
              rows="8"
              placeholder="Your Message..."
              {...register("desc", {
                required: "This field is required",
                maxLength: {
                  value: 300,
                  message: "Should be less than 100",
                },
              })}
            ></textarea>
            {<p className="text-red-400"> {errors.desc?.message}</p>}
            <button
              disabled={responseMessage.loading}
              className="border px-6 py-1 bg-black text-white"
            >
              {responseMessage.loading ? "loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
