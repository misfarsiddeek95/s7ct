'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {FiCamera} from '../assets/icons/vander'

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

export default function TourImageTwo(){
    let images = [
        '/images/listing/1.jpg',
        '/images/listing/2.jpg',
        '/images/listing/3.jpg',
        '/images/listing/4.jpg',
        '/images/listing/5.jpg',
    ];
    let [photoIndex, setActiveIndex] = useState(0);
    let [isOpen, setOpen] = useState(false);


    let handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    return(
        <>
         <div className="container-fluid relative">
                <div className="md:flex mt-4">
                    <div className="lg:w-1/2 md:w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <Image src='/images/listing/1.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <Link href="#" onClick={()=>handleCLick(0)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2">
                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <Image src='/images/listing/2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                        <Link href="#" onClick={()=>handleCLick(1)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <Image src='/images/listing/3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                        <Link href="#" onClick={()=>handleCLick(2)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <Image src='/images/listing/4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                        <Link href="#" onClick={()=>handleCLick(3)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <img src='/images/listing/5.jpg' alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                        <Link href="#" onClick={()=>handleCLick(4)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen( false )}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length,
                        )
                    }
                />
            )}

        </>
    )
}
