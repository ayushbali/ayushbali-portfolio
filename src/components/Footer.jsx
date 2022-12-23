import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";

function Footer({ dark }) {
  const themeStone = dark ? "bg-neutral-900 text-white" : "bg-white";
  return (
    <footer className={` ${themeStone} mx-auto px-2  mt-0 py-3 `}>
      {/* flex container */}
      <div className="flex  px-2 py-2 h-auto justify-between items-center md:items-center md:h-auto landscape:mt-20 landscape:pt-6 ">
        <div className="info md:hidden">
          <p className="text-sm w-2/5">
            Built with React and lots of trial and errors{" >_<"}
          </p>
        </div>
        <div className="link ">
          <ul className="flex flex-col gap-5 md:flex-row ">
            <li className="flex items-center font-bold md:text-sm">
              <>
                <BsTwitter className="mr-1" />
                <a
                  href="https://twitter.com/ayushbali06"
                  className="no-underline"
                >
                  Twitter
                </a>
              </>
            </li>
            <li className="flex items-center font-bold md:text-sm">
              <>
                <BsGithub className="mr-1" />
                <a href="https://github.com/ayushbali" className="no-underline">
                  Github
                </a>
              </>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
