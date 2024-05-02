import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-lightTil ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-lightGray md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">
              Client Satisfaction Guaranteed
            </h1>
            <p className="">
              At Contraparts, customer satisfaction is our top priority. We are
              committed to providing exceptional service, timely delivery, and
              personalized support to our valued clients. With a focus on
              building long-term relationships, we aim to be your trusted
              partner in brass manufacturing.
            </p>
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
  );
};

export default Banner;
