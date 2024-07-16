import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    // min-h-[calc(100vh_-_138px)]
    <main class=" z-10 min-h-[calc(100vh_-_138px)] flex-row-reverse px-5 md:p-10 xl:px-40 flex-col-2 lg:flex pt-10 items-center pb-9  justify-between">
      <div class="relative md:w-full  h-[70vw] sm:hidden  lg:w-[400px] lg:ml-8 lg:mt-8 lg:h-[400px]  md:hidden lg:block flex justify-center w-full items-center bg-[#668cff] sm:bg-[#668cff] rounded md:rounded-full overflow-hidden object-cover">
        <img alt="image" src="images/person3.png" class="object-cover" />
      </div>

      <div class="w-full mt-0 md:mt-16 lg:w-1/2 flex items-center justify-center">
        <div class="mt-10  md:mt-0">
          <h2 class="text-[23px]">Hello I'm</h2>
          <h1 class="text-[40px] mt-[-7px] bg-gradient-to-r from-green-400 to-red-600 via-blue-500 text-transparent bg-clip-text font-bold">
            NAVIN CHAUDHARY
          </h1>
          <h2 class="text-[23px] font-bold">
            Frontend focused Full Stack Developer
          </h2>
          <p class="mt-4 text-justify text-[15px] md:text-[20px] font-mono">
            Hey, I'm Navin Chaudhary, a frontend engineer who builds things
            using technologies I've learned so far, such as HTML, CSS, and
            JavaScript. I'm always looking forward to learning new things as I
            grow, and I love keeping myself updated with the rapidly changing
            tech world. Currently, I'm mostly focused on frontend development,
            but I aspire to become a full-stack engineer. I'm excited about the
            prospect of handling end-to-end feature development, taking
            ownership of features, and shipping them in the best possible way.
          </p>
          <div class="mt-8">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary bg-[#3f5cb4] shadow hover:bg-[rgb(26,82,248)] h-9 px-4 py-2 mb-5 text-white">
              <Link to="contact">Hire Me</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
