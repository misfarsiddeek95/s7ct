'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

export default function VideoModalOne(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-red-500 text-red-500 hover:text-white duration-500 ease-in-out mx-auto">
                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
            </Link>
        </div>
        <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)}/>
        </>
    )
}