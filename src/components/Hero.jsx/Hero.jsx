import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  let Banner1 = "https://placehold.co/600x400";
  return (
    <main className="bg-lightTil pt-20 dark:bg-lightTil">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-lightGray md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-lightGray md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">Discover Quality Metal Solutions</h1>
            <p className="">
              Explore our extensive range of premium brass components, fittings,
              and fasteners tailored to meet diverse industry needs. Elevate
              your projects with precision-engineered solutions from Contraparts
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-darkOrange/50 bg-darkOrange px-4 py-2 text-sm text-lightGray transition-colors duration-300 hover:bg-darkOrange/70">
                Get Started
              </button>
              <button className="border-1  rounded-md border-2 border-lightGray px-4 py-2 text-sm text-lightGray transition-colors duration-300 hover:border-lightBlack hover:text-lightBlack">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner1} alt="" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
