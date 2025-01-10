"use client";

import { getCollections } from '@/lib/connect-toApii';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';



const CollectionPage = () => {
    const [collection, setCollection] = React.useState<any[]>([]);
    useEffect(() => {
        console.log(collection);
        fetchCollections();
    },[]
    );
    const fetchCollections = async () => {
        try {
            const response: any = await getCollections();
            console.log(response);

            setCollection(response);

        } catch (error) {
            console.error('Error fetching collections:', error);
            throw error;
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center max-w-[450] space-y-4 flex-col my-8 p-4"> 
                <h1 className='text-gradient font-semibold text-xl md:text-4xl' >Collections</h1>
                <p className="clas text-center font-light">
                Explore the world through collections of beautiful photos free to use under the 
                <Link href="https://unsplash.com/license" className='underline ml-[.5rem] underline-offset-3 font-semibold'>Unsplash License</Link>
                </p>

            </div>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mx-auto md:w-[90%]'>
              
                {collection.length === 0 && Array.from({ length: 30 }).map((_, index) => (
                    <div key={index} className='animate-pulse rounded-lg bg-gray-300 h-64 w-full mb-7'>
                        <div className="h-48 bg-gray-400 mb-4"></div>
                        <div className="h-4 bg-gray-400 mb-2 w-1/3"></div>
                        <div className="h-4 bg-gray-400 w-1/2"></div>
                    </div>
                ))}

                {collection.map((item) => (
                    <Link href={"/collections/" + item.id} key={item.id} className='  rounded-lg'>
                        <div className="relative h-64 w-full mb-7">
                            <Image src={item.cover_photo.urls.small} alt={item.title} fill className='object-cover  object-top rounded-lg ' />
                        </div>
                        <h2 className='font-semibold'>{item.title}</h2>
                        <p className='font-light'>{item.total_photos} photos</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default CollectionPage;