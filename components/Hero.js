"use client";
import ScrollAnimationWrapper from "@/app/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import { useMemo } from "react";
import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { TbRosetteNumber1 } from "react-icons/tb";
import { BsLightning } from "react-icons/bs";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Want anything to be easy with <strong>LaslesVPN</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="bg-pink-500 text-white-500 px-6 py-3 rounded-lg">
              Descargar Catalogo
            </button>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/gracie.jpg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex ">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3  py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-300 z-10">
          <motion.div
            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4  sm:w-auto mx-auto sm:mx-0"
            custom={{ duration: 2 }}
            variants={scrollAnimation}
          >
            <div className="flex mx-auto w-40 sm:w-auto">
              <div className="flex items-center justify-center bg-orange-100 px-4 mr-6 rounded-xl">
                <BsLightning className="text-pink-500 text-4xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-black-600 font-bold">sdfsdfsdf</p>
                <p className="text-lg text-black-500">sdfsdfsdf</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
            custom={{ duration: 2 }}
            variants={scrollAnimation}
          >
            <div className="flex mx-auto w-40 sm:w-auto">
              <div className="flex items-center justify-center bg-orange-100 px-4 mr-6 rounded-xl">
                <TbRosetteNumber1 className="text-pink-500 text-4xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-black-600 font-bold">sdfsdfsdf</p>
                <p className="text-lg text-black-500">sdfsdfsdf</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
            custom={{ duration: 2 }}
            variants={scrollAnimation}
          >
            <div className="flex mx-auto w-40 sm:w-auto">
              <div className="flex items-center justify-center bg-orange-100 px-4 mr-6 rounded-xl">
                <GiTrophyCup className="text-pink-500 text-4xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-black-600 font-bold">sdfsdfsdf</p>
                <p className="text-lg text-black-500">sdfsdfsdf</p>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
