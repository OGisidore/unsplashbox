"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCollection, getCollectionPhotos } from '@/lib/connect-toApii';

const CollectionPage: React.FC = () => {
    const { id } = useParams() as { id: string };
    const [photos, setPhotos] = React.useState<any[]>([]);
    const [totalPhotos, setTotalPhotos] = React.useState<number>(0);
    React.useEffect(() => {
        fetchCollection();
    }, []);

    const fetchCollection = async () => {
        try {
            const response: any = await getCollectionPhotos(id);
            console.log(response);
            
            setTotalPhotos(response.total);
            setPhotos(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching collection:', error);
            throw error;
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center max-w-[450] space-y-4 flex-col my-8 p-4"> 
                <h1 className='text-gradient font-semibold text-xl md:text-4xl' >Collections</h1>
                <p className="clas text-center font-light">
                    {totalPhotos} photos

                </p>

            </div>
            </div>
    );
};

export default CollectionPage;