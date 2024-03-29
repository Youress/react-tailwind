import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want tips & tricks optimizs your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3  w-full rounded-md text-black outline-none" type="email" placeholder="Enter Email" />
                <button className="bg-greeny w-[200px] ml-4 rounded-md font-medium my-6 py-3 text-black">Notify me</button>
            </div>
            <p>We care about the protecttion of your data.  Read our <span className="text-greeny">Privacy Policy</span> .</p>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
