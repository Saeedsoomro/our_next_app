import Link from "next/link";
import React from "react";

const ServiceBox = ({ item }) => {
  return (
    <div className="border border-graylight shadow flex flex-col justify-between ">
      <div className="h-[20rem]">
        <img
          className="w-full h-full hover:opacity-50 bg-black"
          src={item.image}
        />
      </div>
      <div className=" mx-8 py-6 border-b-2 border-gray">
        <h2 className="text-2xl text-black ">{item.name}</h2>
        <p className="text-base pt-4 underline hover:text-graydark cursor-pointer">
          Read More
        </p>
      </div>
      <div className="py-8">
        <p className="text-lg ">$ {item.price}</p>
        <p className="text-lg ">{item.time}</p>
      </div>
      <div className="mb-10">
        <Link
          href={`/book-online/${item.slug}`}
          className=" px-6 py-2 bg-graydark text-white text-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceBox;
