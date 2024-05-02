import React from "react";
import Slider from "react-slick";

const Industries = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="body-font text-lightBlack dark:text-lightGray">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium  text-lightBlack dark:text-lightGray">
              Industries Served
            </h1>
            <p className="mx-auto text-base leading-relaxed text-lightBlack  dark:text-lightGray lg:w-2/3">
              Our custom brass components find applications across various
              industries.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Electrical and Electronics
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    From switches to connectors, our brass components ensure
                    reliable performance in electrical and electronic systems.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Automotive
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    Our brass fittings and fasteners are integral to automotive
                    engines, fuel systems, and interior fittings, ensuring
                    durability and safety on the road.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Plumbing and Sanitary
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    We supply brass fittings and valves that meet stringent
                    standards for plumbing and sanitary systems, ensuring
                    leak-proof connections and long-lasting performance.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Aerospace
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    Our precision-engineered brass components are trusted in
                    critical aerospace applications, providing reliability and
                    performance under extreme conditions.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Construction
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    Brass hardware and fixtures from Prisha Brass add a touch of
                    elegance and durability to construction projects, enhancing
                    both functionality and aesthetics.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Marine
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    Our corrosion-resistant brass fittings and fasteners are
                    essential for marine vessels, ensuring reliability and
                    longevity in harsh saltwater environments.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Medical and Healthcare
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    We provides biocompatible brass components for medical
                    devices and surgical instruments, meeting the stringent
                    requirements of the healthcare industry.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Instrumentation and Control
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    Our brass components play a vital role in instrumentation
                    panels and control systems, offering precise measurement and
                    control capabilities.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Telecommunications
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    With our reliable brass connectors and terminals, we
                    contribute to the seamless connectivity and performance of
                    telecommunications infrastructure.
                  </span>
                </div>
              </div>
              <div className="mb-11 mr-5 flex flex-col text-center lg:mr-16">
                <div className="relative mb-4 inline-block shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block h-[150px] w-[150px] shrink-0 rounded-[.95rem]"
                    src="https://placehold.co/400x600"
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="javascript:void(0)"
                    className=" text-[1.25rem] font-semibold text-lightBlack transition-colors duration-200 ease-in-out hover:text-darkOrange dark:text-lightGray"
                  >
                    Furniture and Hardware
                  </a>
                  <span className="text-muted block text-[0.75rem]  font-medium text-lightBlack dark:text-lightGray">
                    We offers a wide range of brass handles, knobs, and
                    decorative elements, adding elegance and functionality to
                    furniture and hardware designs.
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
