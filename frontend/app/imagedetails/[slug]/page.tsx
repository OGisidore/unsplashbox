"use client";
import React, { useEffect, useState } from 'react';
import { addPhotoToCollection, getImageDetails, searchCollections } from '@/lib/connect-toApii';
import {  useParams } from 'next/navigation';
import Image from 'next/image';
import { ImageDetails } from '@/types/photo';
import { Button } from '@/components/ui/button';
import { CustomIcon } from '@/components/icons/custum-icon';
import { X } from "lucide-react";



const ImageDetailsPage: React.FC = () => {
    // const router = useRouter();
    const [quer, setQuer] = useState<string>('');
    const [opwnModal, setOpenModal] = useState<boolean>(false);
    const [collections, setCollections] = useState<any[]>([]);
    const [matchs, setMatch] = useState<number>(0);
    const { slug } = useParams();
    const [imageDetails, setImageDetails] = useState<ImageDetails | null>(null);

    useEffect(() => {
        if (slug) {
            fetchResults(slug as string);
        }
    }, [slug]);
    const fetchResults = async (slug: string) => {
        try {
            const response: any = await getImageDetails(slug);
            console.log(response);

            setImageDetails(response);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    if (!imageDetails) {
        return (
            <div className="animate-pulse w-full h-headerscreenminusheader flex items-center justify-center ">
                <div className='w-[90%] h-[80vh] md:w-[80%]   lg:flex gap-8 '>
                    <div className=" bg-gray-400 lg:w-[50%] h-full">
                    </div>
                    <div className="details space-y-8 relative lg:w-[50%] h-full">
                        <div className="authoreProfile space-y-6">
                            <div className="flex gap-2 items-center">
                                <div className=" bg-gray-400  rounded-full h-12 w-12">

                                </div>
                                <div className="h-4 bg-gray-400 w-1/2"></div>

                            </div>
                            <div className="h-4 bg-gray-400 w-1/2"></div>
                            <div className="cta flex gap-5">
                                <div className="h-8 bg-gray-400 w-1/2"></div>
                                <div className="h-8 bg-gray-400 "></div>

                            </div>

                        </div>
                        <div className="collections space-y-2">
                            <div className="h-4 bg-gray-400 w-1/2"></div>
                            {/* <div className="collectionList flex gap-4"> */}
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="collectionItem hover:bg-secondary flex items-center justify-between p-2 rounded-lg group">
                                    <div className="flex gap-4 items-center">
                                        <div className="h-16 bg-gray-400 w-16  " >
                                        </div>
                                        <div className="dt">
                                            <div className="h-4 bg-gray-400 w-1/2"></div>
                                            <div className="h-4 bg-gray-400 w-1/2"></div>
                                        </div>
                                    </div>

                                    <div className="h-8 bg-gray-400 w-1/2"></div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )

    }

    // function qui converti la date en format lisible comme octorbre 34, 2021
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // seach collections by query

    const searchCollectionsby = async () => {
        try {
            const response: any = await searchCollections(quer);
            console.log(response);
            setMatch(response.total);
            setCollections(response.results);
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    }

    // add photo to collection
    const addPhotoToCollectionq = async (collectionId: string, photoId: string = imageDetails.id) => {
        try {
            const response: any = await addPhotoToCollection(collectionId, photoId);
            console.log(response);
            // mettre a jour les collections
            // setCollections([...collections, response]);
            return response.data;
        } catch (error) {
            console.error('Error adding photo to collection:', error);
            throw error;
        }
    };

    // download image to local storage
    const downloadImage = async (url: string) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const localUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = localUrl;
            a.download = 'image.jpg';
            a.click();
        } catch (error) {
            console.error('Error downloading image:', error);
            throw error;
        }
    };

    // const [downloadProgress, setDownloadProgress] = useState<number>(0);

    // const downloadImageWithProgress = async (url: string) => {
    //     try {
    //         const response = await fetch(url);
    //         const reader = response.body?.getReader();
    //         const contentLength = +response.headers.get('Content-Length')!;

    //         let receivedLength = 0;
    //         const chunks = [];

    //         while (true) {
    //             const { done, value } = await reader!.read();
    //             if (done) break;
    //             chunks.push(value);
    //             receivedLength += value.length;
    //             setDownloadProgress((receivedLength / contentLength) * 100);
    //         }

    //         const blob = new Blob(chunks);
    //         const localUrl = URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = localUrl;
    //         a.download = 'image.jpg';
    //         a.click();
    //     } catch (error) {
    //         console.error('Error downloading image:', error);
    //         throw error;
    //     }
    // };

    return (
        <div className='w-full h-headerscreenminusheader flex items-center justify-center'>
            <div className='w-[90%] h-[80vh] md:w-[80%]   lg:flex gap-8 '>
                <div className="image relative lg:w-[50%] h-full">
                    <Image src={imageDetails.urls.regular} alt={imageDetails.alt_description} layout="fill" objectFit="cover" />
                </div>
                <div className="details space-y-8 relative lg:w-[50%] h-full">
                    <div className="authoreProfile space-y-6">
                        <div className="flex gap-2 items-center">
                            <div className=" relative  rounded-full h-12 w-12">
                                <Image src={imageDetails.user.profile_image.medium} fill alt={imageDetails.user.name} className=' rounded-full object-cover' />

                            </div>
                            <p className='font-semibold text-lg'>{imageDetails.user.name}</p>
                        </div>
                        <p className=''> Published on {formatDate(imageDetails.promoted_at)} </p>
                        <div className="cta flex gap-5">
                            <Button variant='secondary' onClick={() => setOpenModal(true)} size='default'>
                                <CustomIcon className='mr-2 inline-block' name={'Plus'} /> Add to Collection
                            </Button>
                            <Button variant='secondary' onClick={() => downloadImage(imageDetails.urls.regular)} size='default'>
                                <CustomIcon className='mr-2 inline-block' name={'DownArrow'} /> Download
                            </Button>
                        </div>

                    </div>
                    <div className="collections space-y-2">
                        <h2 className='font-semibold text-xl '> Collections </h2>
                        {/* <div className="collectionList flex gap-4"> */}
                        {imageDetails.related_collections.results.map((collection: any) => (
                            <div key={collection.id} className="collectionItem hover:bg-secondary flex items-center justify-between p-2 rounded-lg group">
                                <div className="flex gap-4 items-center">
                                    <div className="img relative w-16  h-16" >
                                        <Image src={collection.cover_photo.urls.small} fill alt={collection.title} className='rounded-lg object-cover' />
                                    </div>
                                    <div className="dt">
                                        <p className='font-semibold'> {collection.title} </p>
                                        <p className='text-sm'>{collection.total_photos} photos</p>
                                    </div>
                                </div>

                                <Button className='hidden whitespace-nowrap  group-hover:flex gap-4' variant='default' size={"default"}>
                                    <CustomIcon className='mr-2 inline-block' name={'Remove'} /> Remove
                                </Button>
                            </div>
                        ))}
                        {/* </div> */}
                    </div>
                </div>

            </div>

            {/* modal to add to collection */}
            {opwnModal && (
                <div className="modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="modal-content relative space-y-4 bg-white p-8 rounded-lg md:h-[80vh] md:w-[40vw]">
                        <h2 className='font-semibold text-xl'> Add to Collection </h2>
                        {/* close button */}
                        <button className='absolute top-4 right-4' onClick={() => setOpenModal(false)}>
                            <X className='cursor-pointer' />
                            {/* <CustomIcon name='Close' /> */}
                        </button>
                        {/* seach  */}
                        <form onSubmit={(e) => { e.preventDefault(); searchCollectionsby(); }} className="search flex items-center gap-4 p-2 border border-border/75 rounded-lg">
                            <input type="text" value={quer} onChange={(e) => setQuer(e.target.value)} placeholder='Search collections' className='w-full outline-none' />
                            <button type="submit">
                                <CustomIcon name='Search' className='cursor-pointer' />
                            </button>
                        </form>
                        <p> {matchs} collections found </p>
                        <div className="collectionList space-y-4 overflow-auto max-h-[50vh] no-scrollbar">
                            {collections.map((collection: any) => (
                                <div key={collection.id} className="collectionItem flex items-center justify-between p-2 rounded-lg">
                                    <div className="flex gap-4 items-center">
                                        <div className="img relative w-16  h-16" >
                                            <Image src={collection.cover_photo.urls.small} fill alt={collection.title} className='rounded-lg object-cover' />
                                        </div>
                                        <div className="dt">
                                            <p className='font-semibold'> {collection.title} </p>
                                            <p className='text-sm'>{collection.total_photos} photos</p>
                                        </div>
                                    </div>
                                    <Button variant='default' onClick={() => addPhotoToCollectionq(collection.id)} size={"default"}>
                                        <CustomIcon className='mr-2 inline-block' name={'Plus'} /> Add
                                    </Button>
                                </div>
                            ))}
                            {/* {imageDetails.related_collections.results.map((collection: any) => (
                            <div key={collection.id} className="collectionItem flex items-center justify-between p-2 rounded-lg">
                                <div className="flex gap-4 items-center">
                                    <div className="img relative w-16  h-16" >
                                        <Image src={collection.cover_photo.urls.small} fill alt={collection.title} className='rounded-lg object-cover' />
                                    </div>
                                    <div className="dt">
                                        <p className='font-semibold'> {collection.title} </p>
                                        <p className='text-sm'>{collection.total_photos} photos</p>
                                    </div>
                                </div>
                                <Button variant='default' size={"default"}>
                                    <CustomIcon className='mr-2 inline-block' name={'Plus'} /> Add
                                </Button>
                            </div>
                        ))} */}
                        </div>
                    </div>

                </div>
            )}




        </div>
    );
};

export default ImageDetailsPage;