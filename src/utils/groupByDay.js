/**
 * Groups a list of weather forecasts by day.
 * 
 * @param {Array} forecastList - Array of forecast objects, each containing a timestamp (dt).
 * @returns {Array} - Array of arrays, where each inner array contains forecasts for a specific day.
 */
export default function groupByDay(forecastList) {

    // Create an empty object to accumulate grouped forecasts
    const grouped = forecastList.reduce((acc, forecast) => {

        // Convert the timestamp to a JavaScript Date object
        const date = new Date(forecast.dt * 1000);

        // Create a string representing the date in YYYY-MM-DD format
        const dayString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

        // Check if there is already an entry for this date in the accumulator object
        if (!acc[dayString]) {
            // If not, initialize it with an empty array
            acc[dayString] = [];
        }

        // Push the current forecast into the array for this date
        acc[dayString].push(forecast);

        // Return the accumulator for the next iteration
        return acc;
    }, {});

    // Convert the accumulated object into an array of arrays
    return Object.values(grouped);
}