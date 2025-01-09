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