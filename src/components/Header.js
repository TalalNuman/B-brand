import React from "react";
import RArrow from "../images/arrow-right.svg";
import Shoe1 from "../images/shoe1.png";

export default function Head() {
  return (
    <div className="relative lg:flex flex-wrap container lg:h-screen mx-auto">
      <div className="lg:flex flex-wrap w-full lg:w-2/3 pt-20 items-center">
        <img src={Shoe1} alt="shoe" />
        <div className="absolute lg:left-2/4 left-0 lg:text-left py-10 text-center">
          <h3 className="lg:text-2xl text-xl text-gray-600">NEW</h3>
          <h1 className="lg:text-7xl text-3xl font-semibold mb-4">
            NIKE FOR ALL
          </h1>
          <p className="w-4/5 text-gray-600 lg:mx-0 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            incidunt non libero omnis nobis aut ut harum distinctio ratione
            ipsum, aperiam quaerat et ipsa sint.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end w-full lg:w-1/3 pt-72 bg-green-200">
        <button className="bg-red-500 hover:bg-red-600 flex  justify-between lg:p-12 p-10">
          <span className="text-white">SEE ALL</span>
          <img src={RArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
