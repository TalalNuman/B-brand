import React from "react";
import Shoe1 from "../images/shoe1.png";
import RArrow from '../images/arrow-right.svg'

export default function Header() {
  return (
    <header>
      <div className="slider  container mx-auto">
        <div className="slide" >
          <div className="flex relative   ">
            <div className="bg-primary flex md:flex-wrap w-2/3 items-center ">
              <img  src={Shoe1} alt="shoe" />

              <div className="absolute md:left-1/3 md:text-left ">
                <h3 className="md:text-2xl text-xl text-gray-600">NEW</h3>
                <h1 className="md:text-7xl text-3xl font-semibold mb-4">NIKE FOR ALL</h1>
                <p className="   w-3/5 text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis incidunt non libero omnis nobis aut ut harum
                  distinctio ratione ipsum, aperiam quaerat et ipsa sint.
                </p>
              </div>
            </div>
            <div className="bg-charlie flex flex-col justify-end w-1/3">
                <button className="bg-red-500 hover:bg-red-600 flex justify justify-between p-12 ">
                    <span className="text-white">SEE ALL</span>
                    <img src={RArrow} alt="arrow"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
