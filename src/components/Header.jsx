import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../img/logo.png";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EFEFF2]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Лого */}
        <img src={Logo} alt="Logo" />

        {/* Бургер (мобільний) */}
        <button
          className="md:hidden block text-gray-700 focus:outline-none bg-[#F6F7F8] p-[10px] rounded-xl border border-[#DEDEE3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Іконка */}
          <svg
            className="w-6 h-6 " 
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Меню (desktop) */}
        <ul className="hidden md:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2 rounded-full bg-[#F3F4F6] py-3 px-3 space-x-6 text-[#AEB0B1] font-inter font-medium text-[11px]/[31px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
              `px-3 py-3 rounded-full transition 
              ${isActive 
                  ? "text-white bg-[#303030] font-semibold" 
                  : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"}`
  }
            >
              Home
            </NavLink>
          </li>
          <li><NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-3 rounded-full transition 
              ${isActive 
                  ? "text-white bg-[#303030] font-semibold" 
                : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"}`
            }         
            >About</NavLink></li>
          <li><NavLink
              to="/work"
            className={({ isActive }) =>
            `px-3 py-3 rounded-full transition 
            ${isActive 
                ? "text-white bg-[#303030] font-semibold" 
                : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"}`
            }
            >How it works</NavLink></li>
          <li><NavLink
            to="/design"
            className={({ isActive }) =>
              `px-3 py-3 rounded-full transition 
              ${isActive 
                  ? "text-white bg-[#303030] font-semibold" 
                  : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"}`
            }
            >Token design</NavLink></li>
          <li><NavLink
            to="/yard"
            className={({ isActive }) =>
            `px-3 py-3 rounded-full transition 
            ${isActive 
                ? "text-white bg-[#303030] font-semibold" 
                : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"}`
          }
           >YARD flywheel</NavLink></li>
        </ul>
        <button className="hidden md:block xl:hidden w-xl px-[47px] py-[12px] bg-[#303030] text-white rounded-full font-inter font-medium text-[11px]">
          Connect
        </button>
      </div>

      {/* Меню (мобільне) */}
      {isOpen && (
        <>
          <ul className="md:hidden z-50 w-[176px] p-[15px] absolute right-0 rounded-2xl bg-[#E8E9ED] text-[#7A7A7A] font-inter font-medium text-sm">
            <li><NavLink href="#" className="block">Home</NavLink></li>
            <li><NavLink href="#" className="block">About</NavLink></li>
            <li><NavLink href="#" className="block">How it works</NavLink></li>
            <li><NavLink href="#" className="block">Token design</NavLink></li>
            <li><NavLink href="#" className="block">YARD flywheel</NavLink></li>
            <li>
              <button className="w-xl px-[47px] py-[12px] bg-[#303030] text-white rounded-full font-inter font-medium text-[13px] mt-[10px]">
                Connect
              </button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Header;