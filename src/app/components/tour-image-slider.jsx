'use client'
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { placeImage } from "../data/data";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiInstagram, FiMapPin} from '../assets/icons/vander'

export default function TourImageSlider(){
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + placeImage.length - 1) % placeImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeImage.length);
    };
    let currentImage = placeImage[currentImageIndex];

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const settings = {
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 12
            },

            992: {
                items: 8
            },

            767: {
                items: 6
            },

            575: {
                items: 5
            },

            420: {
                items: 3
            },

            320: {
                items: 2
            },
        },
      };
    return(
        <>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {placeImage.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <Link href="" scroll={false} onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                        <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%',height:'auto'}} className="sm:size-40 object-cover" alt=""/>
                                    </Link>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={placeImage[(currentImageIndex + placeImage.length - 1) % placeImage.length]}
                        nextSrc={placeImage[(currentImageIndex + 1) % placeImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center">
                    <Link href="https://www.instagram.com/s7travels/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiInstagram className="size-4"></FiInstagram></Link>
                </div>
            </div>
        </div>
        </>
    )
}