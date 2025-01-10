export interface ImageDetails {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: null | any;
    asset_type: string;
    user: {
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        twitter_username: string;
        portfolio_url: string;
        bio: string;
        location: string;
        links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
        };
        profile_image: {
            small: string;
            medium: string;
            large: string;
        };
        instagram_username: string;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        total_promoted_photos: number;
        total_illustrations: number;
        total_promoted_illustrations: number;
        accepted_tos: boolean;
        for_hire: boolean;
        social: {
            instagram_username: string;
            portfolio_url: string;
            twitter_username: string;
            paypal_email: null | string;
        };
    };

    location: {
        name: string;
        city: string;
        country: string;
        position: {
            latitude: number;
            longitude: number;
        };
    };
    meta: {
        index: boolean;
    };
    public_domain: boolean;
  
    views: number;
    downloads: number;
   
    related_collections: {
        total: number;
        type: string;
        results: {
            id: string;
            title: string;
            description: null | string;
            published_at: string;
            last_collected_at: string;
            updated_at: string;
            featured: boolean;
            total_photos: number;
            private: boolean;
            share_key: string;
            tags: {
                type: string;
                title: string;
                source?: {
                    ancestry: {
                        type: {
                            slug: string;
                            pretty_slug: string;
                            redirect: null | string;
                        };
                    };
                    title: string;
                    subtitle: string;
                    description: string;
                    redirect: null | string;
                    meta_title: string;
                    meta_description: string;
                    cover_photo: {
                        id: string;
                        slug: string;
                        alternative_slugs: {
                            en: string;
                            es: string;
                            ja: string;
                            fr: string;
                            it: string;
                            ko: string;
                            de: string;
                            pt: string;
                        };
                        created_at: string;
                        updated_at: string;
                        promoted_at: string;
                        width: number;
                        height: number;
                        color: string;
                        blur_hash: string;
                        description: string;
                        alt_description: string;
                        breadcrumbs: any[];
                        urls: {
                            raw: string;
                            full: string;
                            regular: string;
                            small: string;
                            thumb: string;
                            small_s3: string;
                        };
                        links: {
                            self: string;
                            html: string;
                            download: string;
                            download_location: string;
                        };
                        likes: number;
                        liked_by_user: boolean;
                        current_user_collections: any[];
                        sponsorship: null | any;
                        topic_submissions: {
                            nature?: {
                                status: string;
                                approved_on: string;
                            };
                            wallpapers?: {
                                status: string;
                                approved_on: string;
                            };
                        };
                        asset_type: string;
                        premium: boolean;
                        plus: boolean;
                        user: {
                            id: string;
                            updated_at: string;
                            username: string;
                            name: string;
                            first_name: string;
                            last_name: string;
                            twitter_username: string;
                            portfolio_url: string;
                            bio: string;
                            location: string;
                            links: {
                                self: string;
                                html: string;
                                photos: string;
                                likes: string;
                                portfolio: string;
                                following: string;
                                followers: string;
                            };
                            profile_image: {
                                small: string;
                                medium: string;
                                large: string;
                            };
                            instagram_username: string;
                            total_collections: number;
                            total_likes: number;
                            total_photos: number;
                            total_promoted_photos: number;
                            total_illustrations: number;
                            total_promoted_illustrations: number;
                            accepted_tos: boolean;
                            for_hire: boolean;
                            social: {
                                instagram_username: string;
                                portfolio_url: string;
                                twitter_username: string;
                                paypal_email: null | string;
                            };
                        };
                    };
                    affiliate_search_query: null | string;
                };
            }[];
            links: {
                self: string;
                html: string;
                photos: string;
                related: string;
            };
            user: {
                id: string;
                updated_at: string;
                username: string;
                name: string;
                first_name: string;
                last_name: string;
                twitter_username: null | string;
                portfolio_url: null | string;
                bio: null | string;
                location: null | string;
                links: {
                    self: string;
                    html: string;
                    photos: string;
                    likes: string;
                    portfolio: string;
                    following: string;
                    followers: string;
                };
                profile_image: {
                    small: string;
                    medium: string;
                    large: string;
                };
                instagram_username: null | string;
                total_collections: number;
                total_likes: number;
                total_photos: number;
                total_promoted_photos: number;
                total_illustrations: number;
                total_promoted_illustrations: number;
                accepted_tos: boolean;
                for_hire: boolean;
                social: {
                    instagram_username: null | string;
                    portfolio_url: null | string;
                    twitter_username: null | string;
                    paypal_email: null | string;
                };
            };
            cover_photo: {
                id: string;
                slug: string;
                alternative_slugs: {
                    en: string;
                    es: string;
                    ja: string;
                    fr: string;
                    it: string;
                    ko: string;
                    de: string;
                    pt: string;
                };
                created_at: string;
                updated_at: string;
                promoted_at: string;
                width: number;
                height: number;
                color: string;
                blur_hash: string;
                description: null | string;
                alt_description: string;
                breadcrumbs: any[];
                urls: {
                    raw: string;
                    full: string;
                    regular: string;
                    small: string;
                    thumb: string;
                    small_s3: string;
                };
                links: {
                    self: string;
                    html: string;
                    download: string;
                    download_location: string;
                };
                likes: number;
                liked_by_user: boolean;
                current_user_collections: any[];
                sponsorship: null | any;
                topic_submissions: {
                    nature?: {
                        status: string;
                        approved_on: string;
                    };
                    wallpapers?: {
                        status: string;
                        approved_on: string;
                    };
                };
                asset_type: string;
                user: {
                    id: string;
                    updated_at: string;
                    username: string;
                    name: string;
                    first_name: string;
                    last_name: string;
                    twitter_username: string;
                    portfolio_url: string;
                    bio: string;
                    location: string;
                    links: {
                        self: string;
                        html: string;
                        photos: string;
                        likes: string;
                        portfolio: string;
                        following: string;
                        followers: string;
                    };
                    profile_image: {
                        small: string;
                        medium: string;
                        large: string;
                    };
                    instagram_username: string;
                    total_collections: number;
                    total_likes: number;
                    total_photos: number;
                    total_promoted_photos: number;
                    total_illustrations: number;
                    total_promoted_illustrations: number;
                    accepted_tos: boolean;
                    for_hire: boolean;
                    social: {
                        instagram_username: string;
                        portfolio_url: string;
                        twitter_username: string;
                        paypal_email: null | string;
                    };
                };
            };
            preview_photos: {
                id: string;
                slug: string;
                created_at: string;
                updated_at: string;
                blur_hash: string;
                asset_type: string;
                urls: {
                    raw: string;
                    full: string;
                    regular: string;
                    small: string;
                    thumb: string;
                    small_s3: string;
                };
            }[];
        }[];
    };
}