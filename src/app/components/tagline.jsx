import React from "react";

import {FiClock, FiMapPin, FiMail, FiFacebook, FiInstagram, FiPhone} from '../assets/icons/vander'
import {FaTripadvisor} from "react-icons/fa";

export default function Tagline() {
  return (
    <>
      <div className="tagline bg-slate-900">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-between">
              <ul className="list-none space-x-2">
                <li className="inline-flex items-center">
                  <FiClock className="text-red-500 size-4"></FiClock>
                  <span className="ms-2 text-slate-300">24 x 7</span>
                </li>
                <li className="inline-flex items-center ms-2">
                  <FiMapPin className="text-red-500 size-4"></FiMapPin>
                  <span className="ms-2 text-slate-300">
                      307/18, Thummodara, Nattandiya
                    </span>
                </li>
              </ul>

              <ul className="list-none">
                <li className="inline-flex items-center">
                  <FiMail className="text-red-500 size-4"></FiMail>
                  <a
                    href="mailto:s7travels95@gmail.com"
                    className="ms-2 text-slate-300 hover:text-slate-200"
                  >
                    s7travels95@gmail.com
                  </a>
                </li>
                <li className="inline-flex items-center ms-2">
                  <ul className="list-none space-x-3">
                    <li className="inline-flex mb-0">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/S7Travels"
                        className="text-slate-300 hover:text-red-500"
                      >
                        <FiFacebook
                          className="size-4 align-middle"
                          title="facebook"
                        ></FiFacebook>
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/s7travels"
                        className="text-slate-300 hover:text-red-500"
                      >
                        <FiInstagram
                          className="size-4 align-middle"
                          title="instagram"
                        ></FiInstagram>
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a
                        target="_blank"
                        href="https://www.tripadvisor.com/Profile/s7travels"
                        className="text-slate-300 hover:text-red-500"
                      >
                        <FaTripadvisor
                          className="size-4 align-middle"
                          title="tripadvisor"
                        ></FaTripadvisor>
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a
                        href="tel:+94766086665"
                        className="text-slate-300 hover:text-red-500"
                      >
                        <FiPhone
                          className="size-4 align-middle"
                          title="phone"
                        ></FiPhone>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}