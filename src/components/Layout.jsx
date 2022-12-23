import React from "react";

function Layout({ dark }) {
  const themeStone = dark ? "bg-neutral-900 text-white" : "bg-white";

  return (
    <main
      className={` mx-auto flex flex-col ${themeStone} h-5/6 mt-0 md:flex-row md:h-full`}
    >
      {/* Hero section */}
      <section className="px-2">
        {/* Flex container  */}
        <div className="h-56  flex flex-col md:gap-5 justify-start items-end mt-20 pt-8 pr-3 pb-8 pl-0 md:items-start">
          <h4 className="text-5xl font-medium md:text-8xl sm:text-6xl pl-1">
            Hello! I'm
          </h4>
          <h4 className=" text-5xl font-medium md:text-8xl sm:text-6xl pl-1">
            Ayush 👋{" "}
          </h4>
          <p className="text-lg text-right font-bold text-teal-400 mt-3 mb-6 pl-1 md:mb-2 ">
            <code>{"{Fullstack Developer}"}</code>
          </p>
          <div className="flex flex-row justify-start px-2 mt-10 md:mt-5 mb-3">
            <p className="text-md w-5/6 md:text-xl md:w-2/5 sm:w-2/4">
              I make computers go *beep bop boop* jk, I love to write code,
              learn tech and build whatever I like :)
            </p>
          </div>
        </div>
      </section>
      {/* showcase */}
      {/* <section className="hidden md:block justify-start items-start mt-20 pt-8 pr-3 pb-8 pl-0 md:items-start">
        <h1>showcase</h1>
      </section> */}
    </main>
  );
}

export default Layout;
