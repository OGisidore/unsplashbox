"use client";
import React, { useEffect, useState } from 'react';
import { getImageDetails } from '@/lib/connect-toApii';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { ImageDetails } from '@/types/photo';
import { Button } from '@/components/ui/button';
import { CustomIcon } from '@/components/icons/custum-icon';



const ImageDetailsPage: React.FC = () => {
    // const router = useRouter();
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
        return <div>Loading...</div>;
    }

    // function qui converti la date en format lisible comme octorbre 34, 2021
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

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
                        <Button variant='secondary' size='default'>
                                <CustomIcon className='mr-2 inline-block' name={'Plus'} /> Add to Collection
                            </Button>
                            <Button variant='secondary' size='default'>
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



        </div>
    );
};

export default ImageDetailsPage;