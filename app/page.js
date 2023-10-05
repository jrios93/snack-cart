"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Logo from "/public/assets/Logo.png";
import Image from "next/image";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiHomeHeart } from "react-icons/bi";
import { FaRegSadTear } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsChatText } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 transition-all " +
          (scrollActive ? "shadow-md pt-0 bg-white-500 " : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={Logo}
              alt="Duendecito Huancayo"
              className="h-8 w-auto"
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center ">
            <LinkScroll
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("inicio");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "inicio"
                  ? " text-pink-500 animation-active "
                  : " text-black-500 hover:text-pink-500 ")
              }
            >
              Inicio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-pink-500 animation-active "
                  : " text-black-500 hover:text-pink-500 ")
              }
            >
              Estresada?
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="ourservices"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("ourservices");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "ourservices"
                  ? " text-pink-500 animation-active "
                  : " text-black-500 hover:text-pink-500 ")
              }
            >
              Solucion
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonial"
                  ? " text-pink-500 animation-active "
                  : " text-black-500 hover:text-pink-500 ")
              }
            >
              Testimonios
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contactus");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contactus"
                  ? " text-pink-500 animation-active "
                  : " text-black-500 hover:text-pink-500 ")
              }
            >
              Contactanos
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center ">
            <BiLogoFacebook className="text-pink-500 text-lg mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all cursor-pointer" />
            <BiLogoInstagramAlt className="text-pink-500 text-lg mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all cursor-pointer" />
            <BiLogoTiktok className="text-pink-500 text-lg mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all cursor-pointer" />
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-1 sm:px-8 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("inicio");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "inicio"
                  ? "  border-pink-500 text-pink-500"
                  : " border-transparent")
              }
            >
              <BiHomeHeart className="h-6 w-6" />
              Inicio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-pink-500 text-pink-500"
                  : " border-transparent")
              }
            >
              <FaRegSadTear className="h-6 w-6" />
              Estresada?
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="ourservices"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("ourservices");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "ourservices"
                  ? "  border-pink-500 text-pink-500"
                  : " border-transparent")
              }
            >
              <GiPartyPopper className="h-6 w-6" />
              Solucion
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimonial"
                  ? "  border-pink-500 text-pink-500"
                  : " border-transparent")
              }
            >
              <BsChatText className="h-6 w-6" />
              Testimonios
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contactus");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "contactus"
                  ? "  border-pink-500 text-pink-500"
                  : " border-transparent")
              }
            >
              <BiPhoneCall className="h-6 w-6" />
              Contactanos
            </LinkScroll>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
