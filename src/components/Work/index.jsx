import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div class="min-h-[90vh] p-3 md:p-10 xl:px-40 gap-8 flex">
        <div class="grid gap-20">
          <div class="text-center grid gap-5">
            <h1 class="text-2xl font3">Portfolio Projects🌐</h1>
            <p class="text-lg italic">
              Dive into my web development portfolio, showcasing projects that
              highlight my skills and expertise as a web developer. From
              responsive designs to dynamic functionality, each project reflects
              my passion for creating engaging and user-friendly web
              experiences. As a skilled web developer, I bring creativity and
              technical prowess to every project, ensuring high-quality results
              that exceed expectations.
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-10">
            <div class="flex  flex-col gap-5   rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Weather App
              </Link>
              <p class="text-justify">
                Weather app is a website where you will find multiple tools on a
                single page, which includes week's forecast, Temperature,
                Weather mode,uv, Wind, Pressure, Humidity, Sunset/sunrise time
                and much more.
              </p>
              <div class="flex flex-row justify-evenly mt-11">
              <ul>
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Navin-Chaudhary/Weather-App"
                  >
                    <img src="images/skill-icons--github-dark.svg" alt="github" class="h-[50px] lg:mt-[100px]"></img>
                  </Link>
                </li>
              </ul>
              <ul class="mt-2">
                <li>
                  <Link
                    target="_blank"
                    to="https://n-weather-app.vercel.app"
                  > 
                 <h1 class="h-[40px]  lg:mt-[100px]  text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">Live ↗</h1>
                  </Link>
                </li>
              </ul>
              </div>
            </div>
            <div class="flex  flex-col gap-5  rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Html Template
              </Link>
              <p class="text-justify">
              Intensify is a clean and modern HTML template that showcases advanced CSS techniques such as Flexbox, viewports, opacities, and alignments. This template represents a landing page for a company, providing essential information for contacts and giving enough context about what the company does.
              </p>
              <div class="flex flex-row justify-evenly">
              <ul>
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Navin-Chaudhary/intensify"
                  >
                    <img src="images/skill-icons--github-dark.svg" alt="github" class="h-[50px] lg:mt-[100px]"></img>
                  </Link>
                </li>
              </ul>
              <ul class="mt-2">
                <li>
                  <Link
                    target="_blank"
                    to="https://intensify-beta.vercel.app/"
                  > 
                 <h1 class="h-[40px]  lg:mt-[100px]  text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">Live ↗</h1>
                  </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
