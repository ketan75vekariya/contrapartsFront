import React from "react";

const HeroProduct = () => {
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
                Explore Our Customized Metal Solutions
              </h2>
              <p className="mt-6 text-lightGray">
                We understand that every project is unique and may require
                tailored solutions to meet specific requirements. That&apos;s
                why we offer a wide range of metal products engineered to your
                exact specifications, ensuring precision, quality, and
                reliability in every component. We offer a comprehensive range
                of services tailored to meet the diverse needs of our customers.
                From custom metal component manufacturing to design support and
                quality assurance, we are committed to delivering excellence in
                every aspect of our service offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProduct;
