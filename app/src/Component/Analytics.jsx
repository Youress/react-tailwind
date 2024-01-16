import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />
        <div className="flex justify-center flex-col" >
          <p className="text-greeny font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            sapiente odio sequi cumque vero placeat excepturi similique fuga
            neque omnis ipsa atque distinctio, architecto eaque quas eum dicta
            esse voluptate!
          </p>
          <button className="bg-black w-[200px] mx-auto md:mx-0 rounded-md font-medium my-6 py-3 text-greeny">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
