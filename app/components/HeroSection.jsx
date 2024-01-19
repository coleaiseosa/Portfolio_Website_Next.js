"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Marcella",
                1000,
                "A Web Developer",
                1000,
                "A UI/UX Designer",
                1000,
                "A Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my Portfolio. I am a Web developer. Eager to learn and
            looking forward to connecting with great minds.
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              <a className="hire_me" href="#contact">
                Hire Me
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  className="cv"
                  href="/files/Okafor_Cole_Aiseosa_CV_.pdf"
                  target="_blank"
                  download="Okafor_Cole_Aiseosa_CV_.pdf"
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>

        {/* mt-4 instead of mt-20*/}
        <div className="col-span-4 place-self-center mt-20 mb-12 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/pic.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
