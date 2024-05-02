import React from "react";
import Banner from "../../assets/blog2.jpg";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-lightGray text-lightBlack dark:bg-lightBlack dark:text-lightGray">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">Why Choose Contraparts?</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <b>Expertise in Brass Manufacturing Solutions.</b> Contraparts
                is your trusted partner for sourcing high-quality brass
                components, fittings, and fasteners from leading manufacturers.
                With our extensive network and industry expertise, we ensure
                that you get precision-engineered products that meet your exact
                specifications.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                    Customized Solutions for Your Needs
                  </li>
                  <li className="font-medium">Transparent Pricing Structure</li>

                  <li className="font-medium">
                    Cost-Effective Solutions for Mass Production
                  </li>
                  <li className="font-medium">
                    Support for Reverse Engineering
                  </li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-darkOrange bg-darkOrange px-4 py-2 text-sm text-lightGray transition-colors duration-300 hover:bg-darkOrange/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
