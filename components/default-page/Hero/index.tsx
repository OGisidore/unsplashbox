"use client"

import React from 'react';
import Image from 'next/image';
import { getPhotos } from '@/lib/connect-toApii';
import { CustomIcon } from '@/components/icons/custum-icon';
import { useRouter } from 'next/navigation';


const Hero: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [photos, setPhotos] = React.useState<any[]>([]);
    const router = useRouter();
    const searchImages = async () => {
        try {
            //    setPhotos(response.results);
            // Redirect to the search results page with the query

            router.push(`/search?query=${searchQuery}`);




        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;

        }
    }
    return (
        <div className=" relative w-full h-headerscreenminusheader flex flex-col items-center justify-center gap-4">
            <div className="hero absolute inset-x-0 -z-10 zoom-out-105 !bottom-0 h-hfullminux16" />
            <div className="max-w-[450px] flex flex-col items-center justify-center gap-4">
                <h2 className="title text-xl md:text-4xl font-semibold"> Search</h2>
                <p className='description text-[1rem] font-light'>Search high-resolution images from Unsplash</p>
                <div className="serchdiv flex items-center p-1 px-3 md:w-[450] gap-4 focus-within:border-border border-border/75 border rounded-lg dark:bg-tertiaryBackground">
                    {/* <input type="text" onChange={(e)=> setSearchQuery(e.target.value)} className="searchbar w-full h-10 bg-transparent border-0 outline-none" placeholder="Enter your keywords..." />
                <button onClick={searchImages} className=''><CustomIcon name="Search" className=" p-2 cursor-pointer "/></button> */}
                    <form className=' flex items-center w-full' onSubmit={(e) => {
                        e.preventDefault();
                        searchImages();
                    }
                    }>
                        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} className="searchbar w-full h-10 bg-transparent border-0 outline-none" placeholder="Enter your keywords..." />
                        <button type="submit" className=''><CustomIcon name="Search" className=" p-2 cursor-pointer " /></button>
                    </form>
                </div>
            </div>




        </div>
    );
};

export default Hero;