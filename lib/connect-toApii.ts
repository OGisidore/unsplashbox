import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'tv0EFQc3V-MWTBycIgkNF32hFgtMBcRRPIPPLFghw6o'; // Replace with your Unsplash API access key

const unsplashApi = axios.create({
    baseURL: UNSPLASH_API_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});

export const getPhotos = async (query: string) => {
    try {
        const response = await unsplashApi.get('/search/photos', {
            params: { query, per_page: 20 },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};

export const postPhoto = async (photoData: any) => {
    try {
        const response = await unsplashApi.post('/photos', photoData);
        return response.data;
    } catch (error) {
        console.error('Error posting photo:', error);
        throw error;
    }
};

// get image details by slug
export const getImageDetails = async (slug: string) => {
    try {
        const response = await unsplashApi.get(`/photos/${slug}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching image details:', error);
        throw error;
    }
};

// seach collections by query
export const searchCollections = async (query: string) => {
    try {
        const response = await unsplashApi.get('/search/collections', {
            params: { query, per_page: 20 },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
};

// add photo to collection
export const addPhotoToCollection = async (collectionId: string, photoId: string) => {
    try {
        const response = await unsplashApi.post(`/collections/${collectionId}/add`, { photo_id: photoId });
        return response.data;
    } catch (error) {
        console.error('Error adding photo to collection:', error);
        throw error;
    }
};

// get all collections
export const getCollections = async () => {
    try {
        const response = await unsplashApi.get('/collections', { params: { per_page: 12 } });
        return response.data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
};

// get collection by id
export const getCollection = async (id: string) => {
    try {
        const response = await unsplashApi.get(`/collections/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching collection:', error);
        throw error;
    }
};

// get collection photos by id
export const getCollectionPhotos = async (id: string) => {
    try {
        const response = await unsplashApi.get(`/collections/${id}/photos`);        
        return response.data;
    } catch (error) {
        console.error('Error fetching collection photos:', error);
        throw error;
    }
};