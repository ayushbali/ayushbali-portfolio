import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ toggleDark, dark }) {
  const themeStone = dark ? "bg-neutral-900" : "bg-white";

  return (
    <nav
      className={` ${themeStone} relative mx-auto flex flex-row justify-end sm:justify-end md:justify-end items-center mt-0 px-5 py-3 `}
    >
      <BsFillMoonStarsFill
        size={20}
        onClick={toggleDark}
        color={`${dark ? "fff" : "000"}`}
        className={"md:cursor-pointer"}
      />
    </nav>
  );
}

export default Navbar;
