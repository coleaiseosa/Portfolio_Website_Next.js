"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { AtSymbolIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Toast } from "react-hot-toast";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at__center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect with me</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, Feel free to contact me,
          whether you have a question or just want to say hi.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/coleaiseosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/aiseosa-marcella-cole/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <div>
        <div className="">
          <div className="flex mb-6 p-3 ">
            <AtSymbolIcon className="h-10 w-10 text-[#ADB7BE]" />
            <p className="text-white m-2">coleaiseosa@gmail.com</p>
          </div>

          <div className="flex mb-6 p-3">
            <PhoneArrowUpRightIcon className="h-10 w-10 text-[#ADB7BE]" />
            <p className="text-white m-2">
              Skype:
              <a className="ml-1" href="Skype:marcellacole" target="_blank">
                marcellacole
              </a>
            </p>
          </div>
        </div>
        <form className="flex flex-col p-3">
          <div className="mb-6">
            {/* <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="vincent@google.com"
              autoComplete="email"
            /> */}
          </div>

          <div className="mb-6">
            {/* <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            /> */}
          </div>

          {/* <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let us talk about ..."
            />
          </div> */}
          {/* <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
