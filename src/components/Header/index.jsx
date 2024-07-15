import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
        <div class="flex p-2 justify-between border-b py-3 items-center place-content-center sticky top-0 z-50">
          <Link class="font-bold font-serif text-2xl w-1/3 md:w-fit " to="/">
            NAVIN.
          </Link>
          <ul class=" font-mono   gap-4 text-md font-bold  hidden lg:flex ul1">
            <li>
              <NavLink to="/" className="p-1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="p-1">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="p-1">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="p-1">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="public/resume.pdf" className="p-1">
                Resume
                <span class="extrnl"> ↗</span>
              </NavLink>
            </li>
          </ul>

          <div class="w-1/3 md:w-fit  ">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 w-9 toggle-btn  bg-[#ffff]"
              id="btn"
              onClick={themechanger}
            >
              <img
                src="images/line-md--moon-twotone-loop.svg"
                class="h-8"
                id="btnIcon"
              ></img>
            </button>
          </div>
          <label class="checkbtn  lg:hidden">
            <i
              class="fa-solid fa-bars"
              id="icon"
              onClick={() => {
                const icon = document.querySelector("#icon");
                const mobilemenu = document.querySelector("#mobilemenu");
                const display = "visible";
                const display2= "none";

                if (display == "visible") {
                  mobilemenu.style.display = "none";
                  // icon.class = "fa-solid fa-x";
                  return true;
                }
                else if(mobilemenu.style.display =="none"){
                  mobilemenu.style.display = "visible";
                }
              }}
            ></i>
            <i class="fa-solid fa-x hidden"></i>
          </label>

          <div
            class="lg:hidden absolute top-20 w-[50%] h-[50vh] right-0 flex justify-center flex-column items-center bg-white  text-center shadow-neutral-500 shadow-md opacity-1000 md:mr-2 menu1"
            id="mobilemenu"
          >
            <ul class=" font-mono  ul1">
              <li class="mb-3 border-b-[1px] md:mb-5">
                <NavLink to="/" className="p-1 ">
                  Home
                </NavLink>
              </li>
              <li class="mb-3 border-b-[1px] md:mb-5">
                <NavLink to="/about" className="p-1 ">
                  About
                </NavLink>
              </li>
              <li class="mb-3 border-b-[1px] md:mb-5">
                <NavLink to="/work" className="p-1">
                  Work
                </NavLink>
              </li>
              <li class="mb-3 border-b-[1px] md:mb-5">
                <NavLink to="/contact" className="p-1">
                  Contact
                </NavLink>
              </li>
              <li class="mb-3 border-b-[1px] md:mb-5">
                <NavLink target="_blank" to="public/resume.pdf" className="p-1">
                  Resume
                  <span class="extrnl"> ↗</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
