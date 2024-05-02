import React from "react";
import { MdOutlinePrecisionManufacturing, MdEngineering } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { BiPackage } from "react-icons/bi";

const MainServices = () => {
  return (
    <>
      <div className=" bg-lightGray py-12 dark:bg-lightBlack">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:text-center">
            <h2 className="mb-4 rounded-lg bg-darkOrange px-3 text-base font-semibold uppercase leading-7 text-lightGray dark:text-lightBlack lg:mb-8">
              Our Services
            </h2>
            <h1 className="text-center text-4xl font-bold tracking-tight text-lightBlack dark:text-lightGray md:text-3xl lg:text-5xl">
              Enhanced
              <span className="bg-gradient-to-r from-darkOrange via-darkOrange/40 to-lightBlack bg-clip-text text-transparent dark:to-lightGray">
                Engineering Solutions
              </span>
            </h1>
            <p className="text-md mt-6 max-w-lg text-center text-lightBlack dark:text-lightGray">
              Experience peace of mind with our custom packaging and shipping
              solutions, tailored to protect your brass components during
              transit. From secure packaging materials to efficient logistics,
              we ensure your components arrive safely and on time, every time.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-lightBlack dark:text-lightGray">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-darkOrange">
                    <MdOutlinePrecisionManufacturing className="h-10 w-10 text-lightGray" />
                  </div>
                  Custom Brass Component Manufacturing
                </dt>
                <dd className="mt-2 text-base leading-7 text-lightBlack dark:text-lightGray">
                  Our expertise in custom brass component manufacturing sets us
                  apart. We specialize in producing precision-engineered brass
                  components to meet your exact specifications and requirements.
                  With state-of-the-art facilities and advanced manufacturing
                  techniques, we ensure the highest quality and reliability in
                  every component we produce.
                </dd>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center text-darkOrange"
                >
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
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-lightBlack dark:text-lightGray">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-darkOrange">
                    <MdEngineering className="h-10 w-10 text-lightGray" />
                  </div>
                  Design and Engineering Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-lightBlack dark:text-lightGray">
                  We understand the importance of design and engineering in the
                  manufacturing process. That&apos;s why we offer comprehensive
                  design and engineering support to help bring your ideas to
                  life. Our team of experienced engineers will work closely with
                  you to optimize designs, enhance manufacturability, and ensure
                  that your components meet the highest standards of quality and
                  performance.
                </dd>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center text-darkOrange"
                >
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
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-lightBlack dark:text-lightGray">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-darkOrange">
                    <BiPackage className="h-10 w-10 text-lightGray" />
                  </div>
                  Custom Packaging and Shipping
                </dt>
                <dd className="mt-2 text-base leading-7 text-lightBlack dark:text-lightGray">
                  We understand that packaging and shipping are critical aspects
                  of the manufacturing process. That's why we offer custom
                  packaging and shipping solutions tailored to your specific
                  needs. Whether you require specialized packaging for delicate
                  components or expedited shipping for urgent orders, we have
                  you covered. Our efficient logistics network ensures that your
                  components are delivered safely and on time, wherever you are
                  located.
                </dd>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center text-darkOrange"
                >
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
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-lightBlack dark:text-lightGray">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-darkOrange">
                    <SiTestcafe className="h-10 w-10 text-lightGray" />
                  </div>
                  Quality Assurance and Testing
                </dt>
                <dd className="mt-2 text-base leading-7 text-lightBlack dark:text-lightGray">
                  Quality is at the heart of everything we do at Prisha Brass.
                  We adhere to strict quality assurance processes to ensure that
                  every component we manufacture meets the highest standards of
                  excellence. From material selection to final inspection, we
                  employ rigorous testing and inspection procedures to ensure
                  that our products meet your specifications and exceed your
                  expectations.
                </dd>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center text-darkOrange"
                >
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
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
