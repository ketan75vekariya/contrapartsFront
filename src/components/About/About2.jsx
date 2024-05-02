import React from "react";

const About2 = () => {
  return (
    <>
      <section id="features">
        <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4  md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-6 p-10 md:w-1/2">
            <h2 className="text-light max-w-md text-center text-4xl font-bold text-lightBlack dark:text-lightGray md:text-left">
              What is different about Contraparts?
            </h2>
            <p className="text-darkGrayishBlue max-w-sm text-lightBlack dark:text-lightGray md:text-left">
              At Contraparts, we believe that being new in the market is our
              greatest strength. It allows us to approach brass manufacturing
              with a fresh perspective, unencumbered by the constraints of
              tradition or complacency. We are agile, adaptive, and eager to
              embrace new ideas and technologies to meet the evolving needs of
              our customers. We have honed our skills and capabilities to
              deliver superior products and solutions to our valued customers
              worldwide.
            </p>
          </div>
          <div className="flex flex-col space-y-8 p-10 md:w-1/2">
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-darkOrange px-4 py-2 text-lightGray md:py-1">
                    01
                  </div>
                  <h3 className="text-base font-bold text-lightBlack dark:text-lightGray md:mb-4 md:hidden">
                    Quality Assurance
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold text-lightBlack dark:text-lightGray md:block">
                  Quality Assurance
                </h3>
                <p className="text-darkGrayishBlue text-lightBlack dark:text-lightGray">
                  We adhere to strict quality assurance processes to ensure that
                  every product that leaves our facility meets the highest
                  standards of quality, reliability, and performance. .
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-darkOrange px-4 py-2 text-lightGray md:py-1">
                    02
                  </div>
                  <h3 className="text-base font-bold text-lightBlack dark:text-lightGray md:mb-4 md:hidden">
                    Custom Solutions
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold text-lightBlack dark:text-lightGray md:block">
                  Custom Solutions
                </h3>
                <p className="text-darkGrayishBlue text-lightBlack dark:text-lightGray">
                  We offer customized solutions to meet the unique requirements
                  of our customers, providing personalized service and support
                  from design to delivery.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-darkOrange px-4 py-2 text-lightGray md:py-1">
                    03
                  </div>
                  <h3 className="text-base font-bold text-lightBlack dark:text-lightGray md:mb-4 md:hidden">
                    Competitive Pricing
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold text-lightBlack dark:text-lightGray md:block">
                  Competitive Pricing
                </h3>
                <p className="text-darkGrayishBlue text-lightBlack dark:text-lightGray">
                  We offer competitive pricing without compromising on quality,
                  providing excellent value for money and cost-effective
                  solutions for our customers.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-darkOrange px-4 py-2 text-lightGray md:py-1">
                    04
                  </div>
                  <h3 className="text-base font-bold text-lightBlack dark:text-lightGray md:mb-4 md:hidden">
                    Global Reach
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold text-lightBlack dark:text-lightGray md:block">
                  Global Reach
                </h3>
                <p className="text-darkGrayishBlue text-lightBlack dark:text-lightGray">
                  With a global network of suppliers, partners, and
                  distributors, we have the capability to serve customers
                  worldwide, delivering products and solutions wherever they are
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
