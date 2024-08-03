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
                News
              </Link>
              <p class="text-justify">
                News is a React app where you will find news highlights. This
                data is provided by the NYT API and you can sort news by
                category and you can also search for articles.
              </p>
              <div class="flex flex-row justify-evenly mt-11 relative lg:top-12">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://github.com/Navin-Chaudhary/News"
                    >
                      <img
                        src="images/skill-icons--github-dark.svg"
                        alt="github"
                        class="h-[50px] "
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul class="mt-2">
                  <li>
                    <Link
                      target="_blank"
                      to="https://news-theta-puce.vercel.app/"
                    >
                      <h1 class="h-[40px]    text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">
                        Visit ↗
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex  flex-col gap-5   rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Gituser
              </Link>
              <p class="text-justify">
                Gituser is a website that allows you to enter a username and get
                all relevant information about a GitHub user or organization,
                including their followers, following, and repositories. The
                user-friendly interface and quick access to GitHub profiles make
                it a valuable tool for developers and recruiters alike. Save
                time and streamline your research with Gituser.
              </p>
              <div class="flex flex-row justify-evenly mt-11">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://github.com/Navin-Chaudhary/GitUser"
                    >
                      <img
                        src="images/skill-icons--github-dark.svg"
                        alt="github"
                        class="h-[50px] "
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul class="mt-2">
                  <li>
                    <Link
                      target="_blank"
                      to="https://git-user-liart.vercel.app/"
                    >
                      <h1 class="h-[40px]    text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">
                        Live ↗
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex  flex-col gap-5  rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Weather App
              </Link>
              <p class="text-justify">
                weather app is a website where you will find multiple tools on a
                single page, which includes week's forecast, Temperature,
                Weather mode,uv, Wind, Pressure, Humidity, Sunset/sunrise time
                and much more
              </p>
              <div class="flex flex-row justify-evenly relative lg:top-16">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://github.com/Navin-Chaudhary/Weather_App"
                    >
                      <img
                        src="images/skill-icons--github-dark.svg"
                        alt="github"
                        class="h-[50px] "
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul class="mt-2">
                  <li>
                    <Link
                      target="_blank"
                      to="https://weatherapp-navin-projects.vercel.app/"
                    >
                      <h1 class="h-[40px]    text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">
                        Live ↗
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex  flex-col gap-5   rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                To-do List
              </Link>
              <p class="text-justify">
                These projects highlight my ability to create dynamic and
                responsive user interfaces, manage state efficiently and
                implement create, read, delete operations. Each app is designed
                with user experience in mind, .This app showcases my skills in
                HTML, CSS and JavaScript
              </p>
              <div class="flex flex-row justify-evenly mt-11">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://github.com/Navin-Chaudhary/Todo-List"
                    >
                      <img
                        src="images/skill-icons--github-dark.svg"
                        alt="github"
                        class="h-[50px] "
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul class="mt-2">
                  <li>
                    <Link
                      target="_blank"
                      to="https://todo-list-gamma-wheat.vercel.app/"
                    >
                      <h1 class="h-[40px]    text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">
                        Live ↗
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex  flex-col gap-5   rounded-lg p-4  box_shadow ">
              <Link class="text-2xl" to="/">
                Html Template
              </Link>
              <p class="text-justify">
                Ldrp is a clean and modern HTML template that showcases advanced
                CSS techniques such as flexbox, viewports, opacity and
                alignment. This template represents the landing page for
                Collage, provides essential information for contacts and gives
                enough context about what Collage does and this template
                showcases my skills in HTML, CSS.
              </p>
              <div class="flex flex-row justify-evenly mt-11">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://github.com/Navin-Chaudhary/Ldrp--website"
                    >
                      <img
                        src="images/skill-icons--github-dark.svg"
                        alt="github"
                        class="h-[50px] "
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul class="mt-2">
                  <li>
                    <Link
                      target="_blank"
                      to="https://ldrp-website.vercel.app/"
                    >
                      <h1 class="h-[40px]    text-white text-[20px] p-1 pl-2 bg-slate-700 rounded-lg">
                        Live ↗
                      </h1>
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
