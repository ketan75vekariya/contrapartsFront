import React from "react";

const CTAService = () => {
  return (
    <>
      <main className="bg-lightTil ">
        <section data-aos="fade-up" className="container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
            <div className=" order-2 flex flex-col items-center gap-4 text-center text-lightGray md:col-span-2  md:items-start md:text-left ">
              <h1 className="text-3xl font-bold ">Join Us on Our Journey</h1>
              <p className="">
                We are driven by a shared vision of becoming the preferred
                choice for brass manufacturing solutions. Join us on our journey
                as we strive to redefine industry standards, challenge the
                status quo, and deliver excellence in everything we do.
                Together, let&apos;s build a brighter future with Contraparts.
              </p>
              <button className="rounded-md border-2 border-darkOrange/50 bg-darkOrange px-4 py-2 text-sm text-lightGray transition-colors duration-300 hover:bg-darkOrange/70">
                Get Started
              </button>
            </div>
            <div className="order-1">
              <iframe
                className="aspect-video w-full"
                src="https://placehold.co/600x400/000000/FFF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CTAService;
