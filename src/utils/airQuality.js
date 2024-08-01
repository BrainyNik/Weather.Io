
const getAQIBackground = (aqi) => {
    if (aqi === 1) return 'bg-green-500';  // Good
    else if (aqi === 2) return 'bg-yellow-500'; // Moderate
    else if (aqi === 3) return 'bg-orange-500'; // Unhealthy for Sensitive Groups
    else if (aqi === 4) return 'bg-red-500';    // Unhealthy
    else return 'bg-maroon-500';                 // Hazardous
};

const getAirQuality = (aqi) => {
    if (aqi === 1) return 'Good';  // Good
    else if (aqi === 2) return 'Fair'; // Moderate
    else if (aqi === 3) return 'Moderate'; // Unhealthy for Sensitive Groups
    else if (aqi === 4) return 'Poor';    // Unhealthy
    else return 'Very Poor';                 // Hazardous

};


export { getAQIBackground, getAirQuality }