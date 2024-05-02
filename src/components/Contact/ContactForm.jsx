import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Thank you for your interest in Contraparts. We welcome the
              opportunity to assist you with any inquiries, requests for quotes,
              or general questions you may have. Please feel free to reach out
              to us using the contact information below.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-lightGray bg-gray-300 bg-opacity-50 px-3 py-1 text-base leading-8 text-lightBlack outline-none transition-colors duration-200 ease-in-out focus:border-darkOrange focus:bg-white focus:ring-2 focus:ring-lightTil dark:bg-lightBlack dark:text-lightGray"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border border-lightGray bg-gray-300 bg-opacity-50 px-3 py-1 text-base leading-8 text-lightBlack outline-none transition-colors duration-200 ease-in-out focus:border-darkOrange focus:bg-white focus:ring-2 focus:ring-lightTil dark:bg-lightBlack dark:text-lightGray"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="h-32 w-full resize-none rounded border border-lightGray bg-gray-300 bg-opacity-50 px-3 py-1 text-base leading-6 text-lightBlack outline-none transition-colors duration-200 ease-in-out focus:border-darkOrange focus:bg-white focus:ring-2 focus:ring-lightTil dark:bg-lightBlack dark:text-lightGray"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-darkOrange px-8 py-2 text-lg text-white hover:bg-darkOrange/80 focus:outline-none">
                  Submit
                </button>
              </div>
              <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                <a className="text-darkOrange">example@email.com</a>
                <p className="my-5 leading-normal">
                  49 Smith St. Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-lightGray">
                    <FaFacebook className="h-[40px] w-[40px] rounded-md bg-darkOrange p-2 text-2xl text-lightGray hover:bg-darkOrange/80" />
                  </a>
                  <a className="ml-4 text-lightGray">
                    <FaInstagram className="h-[40px] w-[40px] rounded-md bg-darkOrange p-2 text-2xl text-lightGray hover:bg-darkOrange/80" />
                  </a>
                  <a className="ml-4 text-lightGray">
                    <FaTwitter className="h-[40px] w-[40px] rounded-md bg-darkOrange p-2 text-2xl text-lightGray hover:bg-darkOrange/80" />
                  </a>
                  <a className="ml-4 text-lightGray">
                    <FaLinkedin className="h-[40px] w-[40px] rounded-md bg-darkOrange p-2 text-2xl text-lightGray hover:bg-darkOrange/80" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
