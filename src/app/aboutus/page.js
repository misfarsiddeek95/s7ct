
import Link from 'next/link';
import Image from 'next/image';

import Navbar from "../components/navbar";
import About from '../components/about'
import Footer from '../components/footer';
import Switcher from '../components/switcher';

import { teamData } from "../data/data";

import {FiFacebook, FiInstagram, FiMusic } from "../assets/icons/vander"
import TourImageSlider from '../components/tour-image-slider';
import Tagline from "@/app/components/tagline";
import {AiOutlineTikTok} from "react-icons/ai";

export default function Aboutus(){
    return(
        <>
            <Tagline />
            <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light"/>
            <section className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">S7 Travels</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">S7 Travels</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                    </ul>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16">
                <About/>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Founder</h3>

                        <p className=" font-semibold">Mr. Sabnas</p>
                    </div>

                    <div className="gflex justify-center items-center h-52 w-52 rounded-full overflow-hidden mx-auto relative">
                        {teamData.map((item,index)=>{
                            return(
                                <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="" alt=""/>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                                <li className="inline"><Link href="https://web.facebook.com/S7Travels/" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiFacebook className="size-4"></FiFacebook></Link></li>
                                                <li className="inline"><Link href="https://www.instagram.com/s7travels/" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiInstagram className="size-4"></FiInstagram></Link></li>
                                                <li className="inline"><Link href="https://www.tiktok.com/@s7travels" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><AiOutlineTikTok className="size-4"></AiOutlineTikTok></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link href="" className="text-lg font-semibold hover:text-red-500 duration-500">{item.name}</Link>
                                            <p className="text-slate-400">{item.position}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </section>
            <TourImageSlider/>
            <Footer/>
            <Switcher/>
        </>
    )
}