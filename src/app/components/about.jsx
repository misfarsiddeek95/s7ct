'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUsers, FiGlobe } from '../assets/icons/vander';
import CountUp from 'react-countup';

export default function About() {
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                <div className="md:col-span-5">
                    <div className="relative">
                        <Image
                            src='/images/about.jpg'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]"
                            alt="About Us"
                        />

                        <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiUsers className="size-6"></FiUsers>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Visitor</span>
                                <p className="text-xl font-bold">
                                    <CountUp className="counter-value" start={0} end={167} />
                                </p>
                            </div>
                        </div>

                        <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiGlobe className="size-6"></FiGlobe>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Travel Packages</span>
                                <p className="text-xl font-bold">
                                    <CountUp className="counter-value" start={0} end={15} />+
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                            About Us
                        </h3>
                        <p className="text-slate-400 max-w-xl mb-6">
                            At S7 TRAVELS, our mission is to craft unforgettable, personalized holidays for every traveler. 
                            Our vision is to become the world's leading provider of personalized travel experiences. With a 
                            dedicated and passionate team, we aim to set the benchmark for bespoke travel services globally.
                        </p>

                        <div className="text-slate-400 max-w-xl mb-6">
                            <h4 className="text-lg font-semibold mb-2">Our Story</h4>
                            <p>
                                S7 TRAVELS began its journey in 2023, founded by Sabnas, our CEO and visionary. With a passion 
                                for creating unforgettable travel experiences, Sabnas aimed to build a travel agency that offers 
                                personalized and unique journeys. Starting from humble beginnings, S7 TRAVELS quickly expanded, 
                                bringing together a dedicated team of travel enthusiasts who share the vision of exceptional 
                                travel planning.
                            </p>
                            <p>
                                Today, S7 TRAVELS is driven by a vibrant team of over 150 professionals. We believe that travel 
                                is more than just visiting a place—it’s about creating lasting memories. Our team works tirelessly 
                                to curate personalized travel experiences that reflect our clients’ dreams and desires, ensuring 
                                that every journey is truly extraordinary.
                            </p>
                        </div>

                        {/*<Link*/}
                        {/*    href="/"*/}
                        {/*    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"*/}
                        {/*>*/}
                        {/*    Learn More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i>*/}
                        {/*</Link>*/}
                    </div>
                </div>

                <div className="absolute bottom-0 start-1/3 -z-1">
                    <Image
                        src='/images/map-plane-big.png'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="lg:w-[600px] w-96"
                        alt="Map with Plane"
                    />
                </div>
            </div>
        </div>
    );
}
