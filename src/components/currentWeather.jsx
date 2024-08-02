
import { Calendar, MapPin } from "lucide-react";
import formatDateTime from "../utils/formatDateTime";

function capitalizeFirstLetters(description) {
  return description
    .toLowerCase() // Convert to lowercase
    .split(' ')    // Split by spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(' ');    // Join with spaces
}



const CurrentWeather = ({ temperature,
  weatherIcon,
  weatherDescription,
  cityName,
  dateTimestamp, timezone, unit }) => {

  return (
    <div className="card-sm">
      <p className="text-xl">Now</p>
      <div className="flex items-center  justify-between ">
        <p className="text-8xl max-xl:text-4xl">{temperature}&deg;{unit === "metric" ? "C" : "F"}</p>
        <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather-icon" className="max-lg:w-10 max-lg:h-10" />
      </div>
      <p className="text-xl border-b border-outline py-3">{capitalizeFirstLetters(weatherDescription)}</p>
      <p className="py-3 flex items-center gap-4 text-xl">
        <Calendar /> {formatDateTime(dateTimestamp, timezone, "cccc, dd LLL yyyy")}
      </p>
      <p className="py-3 flex items-center gap-4 text-xl">
        <MapPin /> {cityName}
      </p>
    </div>
  );
};

export default CurrentWeather;
