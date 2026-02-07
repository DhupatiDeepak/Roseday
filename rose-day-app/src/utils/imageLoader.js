
// Helper to safely load images from assets
export const loadImages = () => {
    try {
        const modules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp,JPG,JPEG}', { eager: true });
        const images = Object.values(modules).map(mod => mod.default);
        console.log(`Loaded ${images.length} images from assets.`);
        return images;
    } catch (error) {
        console.error("Failed to load images:", error);
        return [];
    }
};

export const getRandomImage = (images) => {
    if (!images || images.length === 0) return 'https://placehold.co/600x400/ffb7c5/ffffff?text=No+Image';
    return images[Math.floor(Math.random() * images.length)];
};
