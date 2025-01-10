"use client";
import { CustomIcon } from '@/components/icons/custum-icon';
import { getPhotos } from '@/lib/connect-toApii';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const query = searchParams.get('query');
    const [results, setResults] = useState<{ id: string; urls: { regular: string; small: string }; alt_description: string; description: string }[]>([]);
    // seach images function
    const searchImages = async () => {
        try {
            // Redirect to the search results page with the query
            router.push(`/search?query=${searchQuery}`);
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    };
    useEffect(() => {
        if (query) {
            fetchResults(query);
        }
    }, [query]);
    // fetch results function
    const fetchResults = async (searchQuery: string) => {
        try {
            const response: any = await getPhotos(searchQuery);

            setResults(response.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className=' flex flex-col items-center '>
            <div className="w-full relative  h-40 flex flex-col items-center  gap-4">
                <div className="h-20 w-full " style={{ background: `url('/gradiend-bg@2x.png') no-repeat center center`, backgroundSize: 'cover' }} />
                <div className="serchdiv bg-background top-1/2 transform -translate-y-1/2 absolute flex items-center p-1 px-3 w- md:w-[450] gap-4 focus-within:border-2 border-border border rounded-lg  dark:backdrop:blur-[10px]">
                    <form className=' flex items-center w-full' onSubmit={(e) => {
                        e.preventDefault();
                        searchImages();
                    }
                    }>
                        <input type="text" defaultValue={query || ''} onChange={(e) => setSearchQuery(e.target.value)} className="searchbar w-full h-10 bg-transparent border-0 outline-none" placeholder="Enter your keywords..." />
                        <button type="submit" className=''><CustomIcon name="Search" className=" p-2 cursor-pointer " /></button>
                    </form>
                  
                </div>
            </div>
            {/* <h1>Search Results for "{query}"</h1> */}
            <div className="element w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto md:w-[90%]">
                {results.length === 0 ? (
                    <div className="text-center col-span-12 p-4">
                        <p>No results found for "{query}". Please try different keywords.</p>
                    </div>
                ) : (
                    <>
                        {results.map((photo: any, index:number) => (
                            <div onClick={() => router.push(`/imagedetails/${photo.slug}`)}
                                key={index}
                                className=" imageContainer relative"
                            >
                                <div className="absolute bg-black text-white p-2 z-10">{index + 1}</div>
                                <Image src={photo.urls.regular} fill objectFit="cover" className="rounded-lg" alt={photo.alt_description || 'Unsplash Image'} />
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>
    );
};

export default SearchPage;