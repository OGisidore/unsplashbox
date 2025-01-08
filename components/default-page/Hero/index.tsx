"use client"

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className=" relative w-full h-headerscreenminusheader flex flex-col items-center justify-center gap-4">
            <div className="hero absolute inset-x-0 -z-10 zoom-out-105 !bottom-0 h-hfullminux16"/>
            <div className="max-w-[450px] flex flex-col items-center justify-center gap-4">
            <h2 className="title text-xl md:text-4xl font-semibold"> Search</h2>
            <p className='description text-[1rem] font-light'>Search high-resolution images from Unsplash</p>
            <div className="serchdiv flex p-1 px-3 w-[450px] gap-4 focus-within:border-border border-border/75 border rounded-lg dark:bg-tertiaryBackground">
                <input type="text" className="searchbar w-full h-10 bg-transparent border-0 outline-none" placeholder="Enter your keywords..." />
                <button className="searchbtn w-20 h-10 bg-primary text-white rounded-lg">Search</button>
            </div>
            </div>
        </div>
    );
};

export default Hero;