"use client";

import React, { useEffect, useState } from "react";
import Router from "next/router";
import { styles } from "@/app/style";
import { navLinks } from "@/constants";
import { logo, menu, close } from "@/assets";
import Link from "next/link";

import { motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className={`
      ${styles.paddingX}
      w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 bg-slate-200 rounded-full p-1"><img src={logo} alt="logo" className="w-full h-full object-contain" /></div>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Umer Ahmed Siddiqui
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div 
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-gradient-to-r from-secondary to-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 
                    "text-white" : 
                    "text-primary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
