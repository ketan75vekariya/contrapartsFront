import React from "react";
import { FcEngineering } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <>
      <section className="body-font text-lightBlack">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 text-left">
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-lightBlack dark:text-lightGray sm:text-3xl">
              Welcome to Contraparts
            </h1>
            <p className="mx-auto text-center text-base leading-relaxed text-lightBlack/80 dark:text-lightGray lg:w-3/4 xl:w-2/4">
              We specialize in manufacturing high-quality brass components,
              fittings, fasteners, and inserts. With our commitment to
              excellence and precision engineering, we deliver products that
              meet the highest standards of quality and reliability.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-darkOrange"></div>
            </div>
          </div>
          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
            <div className="flex flex-col p-4 text-left md:w-1/3">
              {
                <FaProductHunt className="mb-5 inline-flex h-20 w-20 flex-shrink-0  rounded-full bg-lightGray text-darkOrange" />
              }
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium dark:text-lightGray text-lightBlack">
                  Explore Our Products
                </h2>
                <p className="text-base leading-relaxed text-lightBlack dark:text-lightGray">
                  Browse through our extensive catalog of brass products,
                  meticulously crafted to cater to diverse industrial and
                  commercial applications. From brass components for electrical
                  and plumbing systems to brass fittings for automotive and
                  machinery, we offer a wide range of solutions to meet your
                  needs.
                </p>
                <a className="mt-3 inline-flex items-center  text-darkOrange">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col p-4 text-left md:w-1/3">
              <VscWorkspaceTrusted className="mb-5 inline-flex h-20 w-20 flex-shrink-0 rounded-full bg-darkOrange p-2 text-lightGray" />
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-lightBlack dark:text-lightGray">
                  Quality You Can Trust
                </h2>
                <p className="text-base leading-relaxed text-lightBlack dark:text-lightGray">
                  Our products undergo rigorous quality control processes to
                  ensure durability, performance, and compliance with industry
                  standards. We take pride in our attention to detail and strive
                  to deliver products that exceed customer expectations.
                </p>
                <a className="mt-3 inline-flex items-center  text-darkOrange">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col p-4 text-left md:w-1/3">
              <div>
                <MdOutlineSentimentSatisfied className="mb-5 inline-flex h-20 w-20 flex-shrink-0 rounded-full  bg-darkOrange text-lightGray" />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-lightBlack dark:text-lightGray">
                  Client Satisfaction Guaranteed
                </h2>
                <p className="text-base leading-relaxed text-lightBlack dark:text-lightGray">
                  Customer satisfaction is our top priority. We are committed to
                  providing exceptional service, timely delivery, and
                  personalized support to our valued clients. With a focus on
                  building long-term relationships, we aim to be your trusted
                  partner in brass manufacturing.
                </p>
                <a className="mt-3 inline-flex items-center text-darkOrange">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
