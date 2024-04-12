import React from "react";

export default function About() {
  return (
    <>
      <div class="min-h-[90vh] grid mt-10 p-3 md:p-10 xl:px-40 flex-col-2 gap-8 lg:flex ">
        <div class="flex flex-col  gap-10">
          <div class="flex  flex-col gap-3 text-lg text-justify">
            <p class="capitalize tracking-widest font-light">
              <b>Hey everyone</b>👋! I'm Navin Chaudhary, a passionate and
              driven software engineer currently in my third year of college
              pursuing a Bachelor's degree in Computer engineering. With a keen
              interest in technology and a dedication to learning and growth, I
              strive to make meaningful contributions in the field of software
              engineering.Beyond my academic and professional endeavors, I have
              a keen interest in Frontend Web Devlopment.
            </p>
          </div>
          <hr />
          <div class="flex  flex-col gap-3 ">
            <h1 class="  font-serif font-mono text-4xl underline">Education</h1>
            <div class="flex flex-col  gap-1">
              <p class="text-md md:text-xl font-mono">
                Bachelor of Engineering in Computer engineering
              </p>
              <h2 class="text-md md:text-xl font-mono">
                🏫 LDRP Institute of Technology and Research
              </h2>
              <h2 class="text-md md:text-xl font-mono">📍 GANDHINAGAR</h2>
              <h2 class="text-md md:text-xl font-mono">⏳ July 2020-Current</h2>
            </div>
          </div>
          <hr />
        </div>
        <div class="p-2  lg:p-4 h-fit lg:border  rounded-md box_shadow">
          <h3 class="text-xl text-center font-bold">Skills</h3>
          <ul class="flex flex-wrap justify-evenly h-fit mt-5 lg:flex-col gap-8 p-0 m-0">
            <li>
              <img
                alt="REACT"
                class="  p-0 m-0 w-[60px] lg:w-[120px] h-fit "
                src="images/skill-icons--react-dark.svg"
              />
            </li>
            <li>
              <img
                alt="JAVASCRIPT"
                class="m-0 w-[60px] lg:w-[120px]  h-fit "
                src="images/vscode-icons--file-type-js-official.svg"
              />
            </li>
            <li>
              <img
                alt="TAILWIND CSS"
                class="m-0 w-[60px] lg:w-[120px]  h-fit "
                src="images/skill-icons--tailwindcss-dark.svg"
              />
            </li>
            <li>
              <img
                alt="CSS"
                class="m-0 w-[60px] lg:w-[120px]  h-fit "
                src="images/skill-icons--css.svg"
              />
            </li>
            <li>
              <img
                alt="HTML"
                class="m-0 w-[60px] lg:w-[120px]  h-fit "
                src="images/skill-icons--html.svg"
              />
            </li>
            <li>
              <img
                alt="PLUSH"
                class="m-0 w-[60px] lg:w-[120px]  h-fit bg-green-700 rounded-full"
                src="images/octicon--plus-circle-16.svg"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
