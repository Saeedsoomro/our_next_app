import React from "react";
import { useState } from "react";

const Times = (props) => {
  const time = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 am",
    "1:00 pm",
    "2:00 pm",
  ];
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    e.preventDefault();
    setInfo(true);
    setEvent(e.target.innerText);
    console.log(event);
  }
  return (
    <div className="mt-8">
      <div className="grid gap-4 grid-rows-2  grid-cols-2">
        {time.map((times) => {
          return (
            <div>
              <button
                className="border border-black p-2 w-full hover:bg-slate-100"
                onClick={(e) => displayInfo(e)}
              >
                {times}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
};

export default Times;
