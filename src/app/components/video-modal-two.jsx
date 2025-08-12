'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'
import {FiVideo} from '../assets/icons/vander'

export default function VideoModalTwo(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="mt-6">
            <Link href="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">View Packages</Link>
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-red-500 bg-red-500 text-white ms-1 lightbox"><FiVideo className="h-4 w-4"></FiVideo></Link><span className="font-semibold ms-1 align-middle"></span>
        </div>
        <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)}/>
        </>
    )
}