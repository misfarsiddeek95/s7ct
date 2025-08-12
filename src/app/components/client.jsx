"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// import { ClientData } from "../data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

import "tiny-slider/dist/tiny-slider.css";
import { performRequest } from "@/lib/datocms";

const CLIENT_REVIEWS_QUERY = `
query clientReviews {
  allClientReviews {
    name
    country
    review
    rating
    image {
      url
    }
  }
}`;

export default function Client() {
  const [reviews, setReviews] = useState([]);

  const fetchData = () => {
    performRequest(CLIENT_REVIEWS_QUERY)
      .then((data) => {
        setReviews(data.allClientReviews);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    container: ".tiny-three-item",
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  };
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          What Our Users Say
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          This is just a simple text made for this unique and awesome template,
          you can replace it with any text.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-6">
        <div className="tiny-three-item">
          <TinySlider settings={settings}>
            {reviews.map((item, index) => {
              return (
                <div className="tiny-slide text-center" key={index}>
                  <div className="cursor-e-resize">
                    <div className="h-[300px] content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                      <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                      <p className="text-slate-400">{item.review}</p>
                      <ul className="list-none mb-0 text-amber-400 mt-3">
                        {Array(item.rating)
                          .fill(0)
                          .map((_, index) => (
                            <li key={index} className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="text-center mt-5">
                      <Image
                        src={item.image.url}
                        height={56}
                        width={56}
                        className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                        alt=""
                      />
                      <h6 className="mt-2 font-semibold">{item.name}</h6>
                      <span className="text-slate-400 text-sm">
                        {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </TinySlider>
        </div>
      </div>
    </div>
  );
}
