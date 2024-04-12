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
                weather app is a website where you will find multiple tools on a
                single page, which includes week's forecast, Temperature,
                Weather mode,uv, Wind, Pressure, Humidity, Sunset/sunrise time
                and much more.
              </p>
              <ul class="flex justify-evenly">
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Navin-Chaudhary/Weather-App"
                  >
                    <img src="images/skill-icons--github-dark.svg" alt="github" class="h-[50px] lg:mt-[100px]"></img>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="flex  flex-col gap-5  rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Git-User
              </Link>
              <p class="text-justify">
                Gituser is a website that allows you to enter a username and get
                all relevant information about a GitHub user or organization,
                including their followers, following, and repositories. The
                user-friendly interface and quick access to GitHub profiles make
                it a valuable tool for developers and recruiters alike. Save
                time and streamline your research with Gituser.
              </p>
              <ul class="flex justify-evenly">
                <li>
                <Link
                    target="_blank"
                    to="https://github.com/Navin-Chaudhary/Weather-App"
                  >
                    <img src="images/skill-icons--github-dark.svg" alt="github" class="h-[50px] lg:mt-12"></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
