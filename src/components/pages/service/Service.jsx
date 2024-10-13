import ScreenWrapper from "@/components/shared/ScreenWrapper";
import React from "react";

const Service = () => {
  return (
    <div className=" bg-white flex flex-col justify-center ">
      <ScreenWrapper className="flex flex-col lg:flex-row h-full gap-4 ">
        <section className="flex flex-col gap-4 items-start order-2 lg:order-1">
          <h2 className="text-4xl font-bold">
            network security <br /> & application security
          </h2>
          <p className="text-lg max-w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </section>
        <section className="order-1 rounded-lg lg:order-2 w-fit bg-white drop-shadow-md p-4">
          <img
            className="rounded-lg"
            src="/images/placeholders/cybersecurity.jpg"
            alt=""
          />
        </section>
      </ScreenWrapper>
      <ScreenWrapper className="flex flex-col gap-4  w-fit">
        <h3 className="capitalize text-2xl font-bold">service benefit</h3>
        <ul className="flex flex-wrap gap-4">
          {Array.from(Array(6).keys()).map((i) => (
            <li className="flex gap-4 items-center lg:w-[calc(50%-16px)] p-4 bg-white drop-shadow rounded-lg">
              <div className="p-0.5 rounded-full bg-[#34A853] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFFFFF"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium"> service benefit  service benefit  service benefit  service benefit  service benefit  service benefit  service benefit  service benefit </span>
            </li>
          ))}
        </ul>
      </ScreenWrapper>
    </div>
  );
};

export default Service;
