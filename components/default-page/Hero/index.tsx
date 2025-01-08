"use client"

import React from 'react';
import Image from 'next/image';
import { getPhotos } from '@/lib/connect-toApii';
import { CustomIcon } from '@/components/icons/custum-icon';

const Hero: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [photos, setPhotos] = React.useState<any[]>([]);
    const searchImages = async () => {
        try {
            const response : any = await getPhotos('nature in finland');
           setPhotos(response.results);
            
            
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
            
        }
    }
    return (
        <div className=" relative w-full min-h-headerscreenminusheader flex flex-col items-center justify-center gap-4">
            <div className="hero absolute inset-x-0 -z-10 zoom-out-105 !bottom-0 h-hfullminux16"/>
            <div className="max-w-[450px] flex flex-col items-center justify-center gap-4">
            <h2 className="title text-xl md:text-4xl font-semibold"> Search</h2>
            <p className='description text-[1rem] font-light'>Search high-resolution images from Unsplash</p>
            <div className="serchdiv flex items-center p-1 px-3 w-[450px] gap-4 focus-within:border-border border-border/75 border rounded-lg dark:bg-tertiaryBackground">
                <input type="text" className="searchbar w-full h-10 bg-transparent border-0 outline-none" placeholder="Enter your keywords..." />
                <button onClick={searchImages} className=''><CustomIcon name="Search" className=" p-2 cursor-pointer "/></button>
                
            </div>
            </div>
            <div className="element w-full md:w-[1180] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div 
                        key={index} 
                        className=" imageContainer relative" 
                        // style={{ height: `${Math.floor(Math.random() * 11) + 10}rem`, width: '10rem' }}
                    >
                        <div className="absolute bg-black text-white p-2 z-10">{index +1}</div>
                        <Image src={photo.urls.regular} fill objectFit="cover" className="rounded-lg" alt={photo.alt_description || 'Unsplash Image'} />
                    </div>
                ))}
            </div>


                
        </div>
    );
};

export default Hero;