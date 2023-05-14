import Layout from "@/components/Layouts/layout";
import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <Layout>
      <div className="px-10 md:px-40 lg:px-60 2xl:px-80 my-10 text-center">
        <h1 className="text-3xl text-black my-2">Thank you, Saee Ali</h1>
        <p className="my-2">You Shall recieve Confirmation message Soon</p>
        <div className="h-40 border my-10"></div>
        <Link href="/" className="underline hover:text-gray">
          Continue Browing
        </Link>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
