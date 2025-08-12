"use client";
import React, {useState, useEffect, useRef} from "react";

import Link from "next/link";
import Image from "next/image";

import {
  FiSearch,
  FiUser,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
} from "../assets/icons/vander";

export default function Navbar({navclass, navlight, manuclass}) {
  let [scrolling, setScrolling] = useState(false);
  let [isToggle, setToggle] = useState(false);
  let [manu, setManu] = useState("");
  let [subManu, setSubManu] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [userManu, setUserManu] = useState(false);

  let dropdownRef = useRef(null);
  let userRef = useRef(null);

  const toggleMenu = () => {
    setToggle(!isToggle);
  };

  useEffect(() => {
    // Only run on client
    const handleScroll = () => {
      const isScrolling = window.scrollY > 50;
      setScrolling(isScrolling);
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const userOutsideClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserManu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("click", userOutsideClick);
    let current = window.location.pathname;
    setManu(current);
    setSubManu(current);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("click", userOutsideClick);
    };
  }, []);

  return (
    <nav id="topnav" className={`${navclass} ${scrolling ? "nav-sticky" : ""}`}>
      <div className="container relative">
        {navlight && (
          <Link className="logo" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-dark.png"
                width={133}
                height={28}
                className="h-7 l-dark"
                alt=""
              />
              <Image
                src="/images/logo-light.png"
                width={133}
                height={28}
                className="h-7 l-light"
                alt=""
              />
            </span>
            <Image
              src="/images/logo-white.png"
              width={133}
              height={28}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}
        {!navlight && (
          <Link className="logo" href="/">
            <div>
              <Image
                src="/images/logo-dark.png"
                width={133}
                height={28}
                className="h-7 inline-block dark:hidden"
                alt=""
              />
              <Image
                src="/images/logo-white.png"
                width={133}
                height={28}
                className="h-7 hidden dark:inline-block"
                alt=""
              />
            </div>
          </Link>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            <button
              type="button"
              className={`navbar-toggle ${isToggle ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <ul className="buy-button list-none mb-0 space-x-1">
          {navlight === true ? (
            <li
              className="dropdown inline-block relative pe-1"
              ref={dropdownRef}
            >
              <button
                className="dropdown-toggle align-middle inline-flex search-dropdown"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiSearch className="size-5 dark-icon"></FiSearch>
                <FiSearch className="size-5 white-icon text-white"></FiSearch>
              </button>
              {isOpen && (
                <div
                  className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                  <div className="relative">
                    <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                    <input
                      type="text"
                      className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900"
                      name="s"
                      id="searchItem"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              )}
            </li>
          ) : (
            <li
              className="dropdown inline-block relative pe-1"
              ref={dropdownRef}
            >
              <button
                className="dropdown-toggle align-middle inline-flex search-dropdown"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiSearch className="size-5"></FiSearch>
              </button>
              {isOpen && (
                <div
                  className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                  <div className="relative">
                    <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                    <input
                      type="text"
                      className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900"
                      name="s"
                      id="searchItem"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              )}
            </li>
          )}
        </ul>

        <div
          id="navigation"
          style={{display: isToggle === true ? "block" : "none"}}
        >
          <ul className={`navigation-menu ${manuclass}`}>
            <li
              className={`parent-menu-item ${
                [
                  "/",
                  "/index-two",
                  "/index-three",
                  "/index-four",
                  "/index-five",
                  "/index-item",
                ].includes(manu)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/" onClick={() => setToggle(false)}>Home</Link>
              <ul
                className={`submenu ${
                  [
                    "/",
                    "/index-two",
                    "/index-three",
                    "/index-four",
                    "/index-five",
                    "/index-item",
                  ].includes(subManu)
                    ? "open"
                    : ""
                }`}
              >
              </ul>
            </li>

            <li
              className={`parent-parent-menu-item ${
                [
                  "/tours",
                  "/grid-left-sidebar",
                  "/grid-right-sidebar",
                  "/list",
                  "/list-left-sidebar",
                  "/list-right-sidebar",
                  "/tour-detail-one",
                  "/tour-detail-two",
                  "/listing-item",
                  "/grid-item",
                  "/list-item",
                  "/detail-item",
                ].includes(manu)
                  ? "active"
                  : ""
              }`}
            >
              <Link
                href="/tours"
                onClick={() => setToggle(false)}
              >
                Tours
              </Link>
            </li>

            <li
              className={`parent-parent-menu-item ${
                [
                  "/page-item",
                  "/aboutus",
                  "/user-item",
                  "/user-profile",
                  "/user-billing",
                  "/user-payment",
                  "/user-invoice",
                  "/user-social",
                  "/user-notification",
                  "/user-setting",
                  "/help-item",
                  "/helpcenter",
                  "/helpcenter-faqs",
                  "/helpcenter-guides",
                  "/helpcenter-support",
                  "/auth-item",
                  "/login",
                  "/signup",
                  "/forgot-password",
                  "/lock-screen",
                  "/utility-item",
                  "/terms",
                  "/privacy",
                  "/special-item",
                  "/comingsoon",
                  "/maintenance",
                  "/404",
                ].includes(manu)
                  ? "active"
                  : ""
              }`}
            >
              <Link
                href="/aboutus"
                onClick={() => setToggle(false)}
              >
                About Us
              </Link>
            </li>

            <li className={`${manu === "/contact" ? "active" : ""}`}>
              <Link href="/contact" className="sub-menu-item" onClick={() => setToggle(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
