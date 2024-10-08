import ScreenWrapper from "@/components/shared/ScreenWrapper";
import React from "react";

const About = () => {
  return (
    <section className="flex-1 flex-col bg-white">
      <ScreenWrapper className="flex flex-col lg:flex-row flex-1 justify-between h-auto  gap-4 items-center py-20">
        <section className="flex-1 flex flex-col gap-4">
          <h1 className="text-xl capitalize">about us</h1>
          <h4 className="text-4xl font-bold capitalize leading-[1.3]">
            upgrade your security <br /> with us effortlessly
          </h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            atque autem, voluptates magnam, voluptate rem, necessitatibus
            repellendus voluptatibus facilis dolores doloremque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section className="flex-1 flex flex-col gap-2">
          <img src="/images/placeholders/team.png" alt="" />
          <div className="flex gap-4 w-full justify-center flex-col lg:flex-row">
            <div className="border rounded-lg p-3">
              <h5 className="text-primary text-xl mb-4">
                33+ years of experience
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="border rounded-lg p-3">
              <h5 className="text-primary text-xl mb-4">120+ projects</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </section>
      </ScreenWrapper>
    </section>
  );
};

export default About;
