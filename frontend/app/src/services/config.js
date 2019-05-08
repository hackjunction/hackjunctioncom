const DEBUG_HOSTNAMES = ['localhost', 'sitetest.hackjunction.com'];

const config = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
    CLOUDINARY_CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'hackjunction',
    FACEBOOK_PIXEL_ID: process.env.REACT_APP_FACEBOOK_PIXEL_ID,
    HOTJAR_ID: process.env.REACT_APP_HOTJAR_ID,
    HOTJAR_SV: process.env.REACT_APP_HOTJAR_SV || 6,
    GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
    IS_DEBUG: DEBUG_HOSTNAMES.indexOf(window.location.hostname) !== -1
};

export default config;
