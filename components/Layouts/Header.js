import React, { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaShopify } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [navLink, setNavlink] = useState("/");
  const router = useRouter();
  const { pathname } = router;

  return (
    <header>
      {/* ------------------>side bar <tr--------------------- */}
      <div
        className={`${
          openNav
            ? "opacity-100 left-0 transit "
            : "left-[-100%] opacity-0 transit"
        } relative z-10 `}
      >
        <div className="fixed top-0  w-full min-h-screen bg-white">
          <div className="bg-gray text-black h-60 px-5 flex flex-col justify-between">
            <div className=" text-4xl font-bold p-10">
              <AiOutlineClose onClick={() => setOpenNav(false)} />
            </div>
          </div>
          <div className="flex flex-col mx-3">
            <div className="border-b py-1 w-9/12 ">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                HOME
              </Link>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                ABOUT
              </Link>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                COMPANIES
              </Link>
            </div>
            <div className="border-b py-1 w-10/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                MISSION & PURPOSES
              </Link>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                VALUES
              </Link>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                {openService ? (
                  <AiOutlineMinus
                    className="inline float-right"
                    onClick={() => setOpenService(false)}
                  />
                ) : (
                  <AiOutlinePlus
                    className="inline float-right"
                    onClick={() => setOpenService(true)}
                  />
                )}
                Services
              </Link>
              <div
                className={
                  openService
                    ? "transit opacity-100 h-full "
                    : "transit opacity-0 h-0"
                }
              >
                <Link
                  href="#home"
                  className="text-xl block text-gray py-1 px-2 "
                >
                  The blogs
                </Link>
                <Link
                  href="#home"
                  className="text-xl block text-gray py-1 px-2 "
                >
                  the writter
                </Link>
              </div>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                CONTACT US
              </Link>
            </div>
            <div className="border-b py-1 w-9/12">
              <Link
                href="#home"
                className="text-2xl block text-gray py-1 px-2 "
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*-------------> navabar <---------------------- */}
      <div className="my-2 py-2 border-solid border-y border-gray">
        <div className="flex flex-col  items-center border-solid border-y border-gray px-0 md:px-8 lg:px-40 2xl:px-80 py-2 ">
          {/* <div className="mt-1  flex-row justify-between w-full hidden md:flex ">
            <Link href="#home" className="text-2xl text-gray">
              <BiErrorCircle />
            </Link>
            <div className="flex flex-row">
              <Link href="#home" className="flex flex-row ">
                <p className="text-2xl text-gray mx-2">
                  <FaUserCircle />
                </p>
                <p className="text-gray ">login</p>
              </Link>
              <Link href="#home" className="text-2xl text-gray  mx-2">
                <FaShopify />
              </Link>
            </div>
          </div> */}
          <div className="w-full">
            <div className="flex justify-center px-10 md:px-0">
              <div className="text-4xl mt-4 mr-6 md:hidden">
                <AiOutlineMenu onClick={() => setOpenNav(true)} />
              </div>
              <Link href="#home" className="text-8xl md:text-9xl font-bold">
                <h1>LOGO</h1>
              </Link>
            </div>
            <div className="flex justify-center md:hidden">
              <div className="socialIcon">1</div>
              <div className="socialIcon">1</div>
              <div className="socialIcon">1</div>
              <div className="socialIcon">1</div>
            </div>
          </div>
          <ul className="w-full hidden hidden md:flex justify-between">
            <li>
              <Link
                href="/"
                onClick={() => setNavlink("/")}
                className={
                  pathname == "/"
                    ? navLink == "/"
                      ? "active navLink transit"
                      : "navLink transit"
                    : "navLink transit"
                }
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setNavlink("/about")}
                className={
                  navLink == "/about"
                    ? "active navLink transit"
                    : "navLink transit"
                }
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#compony"
                onClick={() => setNavlink("/compony")}
                className={navLink == "/compony" ? "active navLink" : "navLink"}
              >
                componies
              </Link>
            </li>
            <li>
              <Link
                href="#mission-purposes"
                onClick={() => setNavlink("/mission-purposes")}
                className={
                  navLink == "/mission-purposes" ? "active navLink" : "navLink"
                }
              >
                mission & purposes
              </Link>
            </li>
            <li class="dropdown  group relative px-4 cursor-pointer">
              <Link href="#home" className=" text-graydark uppercase font-noto">
                Services
              </Link>
              <div class="group-hover:block dropdown-menu absolute hidden h-auto w-auto   z-10 pt-3">
                <ul class="bg-white shadow py-2 text-center text-xs">
                  <li>
                    <Link
                      href="#home"
                      class="text-graydark w-auto block  uppercase font-noto hover:bg-blue py-2.5 px-2 cursor-pointer px-8 py-2 whitespace-nowrap"
                    >
                      the blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#home"
                      class="text-graydark block uppercase font-noto hover:bg-blue py-2.5 px-2 cursor-pointer px-8 py-2 w-auto whitespace-nowrap"
                    >
                      giving back
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="#values"
                onClick={() => setNavlink("/values")}
                className={navLink == "/values" ? "active navLink" : "navLink"}
              >
                values
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setNavlink("/contact")}
                className={navLink == "/contact" ? "active navLink" : "navLink"}
              >
                contact us
              </Link>
            </li>
            <li>
              <Link
                href="book-online"
                className={
                  pathname == "/book-online"
                    ? "bg-blue navButton"
                    : "navButton bg-red-400"
                }
              >
                book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
