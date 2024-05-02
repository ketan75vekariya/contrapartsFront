import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-darkOrange/80 bg-lightTil text-lightGray shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-lightGray md:text-3xl ">
            <a href="/home" className="">
              CONTRA
              <span className="inline-block font-bold text-darkOrange">
                PARTS
              </span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/home"
                  className="flex h-[72px] items-center gap-[2px] hover:text-darkOrange/80"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-lightGray p-2 text-lightBlack group-hover:block  ">
                  <ul className="space-y-3">
                    <li className="rounded-md p-2 hover:bg-darkOrange/60 ">
                      <a href="/about">About us</a>
                    </li>
                    <li className="rounded-md p-2 hover:bg-darkOrange/60 ">
                      <a href="/products">Products</a>
                    </li>
                    <li className="rounded-md p-2 hover:bg-darkOrange/60 ">
                      <a href="/services">Service</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px] hover:text-darkOrange/80"
                >
                  Catalog{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-lightGray p-2 text-lightBlack group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-xl font-semibold">
                        Explore Our Products And Services
                      </h1>
                      <p className="text-sm text-slate-600">
                        Browse through our extensive catalog of brass products,
                        meticulously crafted to cater to diverse industrial and
                        commercial applications.From brass components for
                        electrical and plumbing systems to brass fittings for
                        automotive and machinery, we offer a wide range of
                        solutions to meet your needs.
                      </p>
                      <div className="grid grid-cols-3 ">
                        <div className="grid grid-cols-2 ">
                          <ul className="mt-3 flex flex-col gap-2">
                            <h1 className="pb-1 text-xl font-semibold">
                              Products
                            </h1>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Components</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Fittings</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Fasteners</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Inserts</a>
                            </li>
                          </ul>
                          <ul className="mt-3 flex flex-col gap-2">
                            <h1 className="pb-1 text-xl font-semibold">
                              Products
                            </h1>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Components</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Fittings</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Fasteners</a>
                            </li>
                            <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                              <a href="/product">Inserts</a>
                            </li>
                          </ul>
                        </div>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Other Services
                          </h1>
                          <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                            <a href="/service">
                              Custom Brass Component Manufacturing
                            </a>
                          </li>
                          <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                            <a href="/product">
                              Design and Engineering Support
                            </a>
                          </li>
                          <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                            <a href="/product">Quality Assurance and Testing</a>
                          </li>
                          <li className="cursor-pointer text-lightBlack/80 hover:text-darkOrange/80">
                            <a href="/product">Custom Packaging and Shipping</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor pointer">
                <a href="/contact" className="hover:text-darkOrange/80">
                  Contact us
                </a>
              </li>
              <li className="cursor pointer">
                <a href="/blog" className="hover:text-darkOrange/80">
                  Blog
                </a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-darkOrange p-2 text-2xl text-lightGray hover:bg-darkOrange/80" />
                </li>
                <li>
                  <div>
                    <button className="rounded-md border-2 border-darkOrange/50 bg-darkOrange px-4 py-2 text-sm text-lightGray transition-colors duration-300 hover:bg-darkOrange/70">
                      Request a Quote
                    </button>
                  </div>
                </li>
              </div>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
