import React from "react";

const About1 = () => {
  return (
    <>
      <div className="mt-16 bg-lightTil py-16">
        <div className="container m-auto px-6 text-lightGray md:px-12 xl:px-6">
          <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://placehold.co/600x400"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold text-lightGray md:text-4xl">
                About Us
              </h2>
              <p className="mt-6 text-lightGray">
                Welcome to ContraParts, a fresh and innovative player in the
                brass manufacturing industry and your premier destination for
                high-quality brass components, fittings, and fasteners. Founded
                with a vision to provide excellence in brass manufacturing, we
                bring a wealth of enthusiasm, passion, and determination to
                deliver excellence in brass components, fittings, and fasteners,
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
