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
              <h1 className="text-2xl md:text-4xl ">Quality You Can Trust</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our products undergo rigorous quality control processes to
                ensure durability, performance, and compliance with industry
                standards. We take pride in our attention to detail and strive
                to deliver products that exceed customer expectations.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                    Strict Quality Assurance Measures
                  </li>
                  <li className="font-medium">
                    Compliance with Industry Standards
                  </li>
                  <li className="font-medium">
                    Dedicated Team of Professionals
                  </li>
                  <li className="font-medium">
                    Secure Packaging and Timely Delivery
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
