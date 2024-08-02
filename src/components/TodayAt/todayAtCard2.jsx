import formatDateTime from "../../utils/formatDateTime";
import direction from "../../assets/weather_icons/direction.png";

const TodayAtCard2 = ({ secs, timezone, wind, unit }) => {
  const isMetric = unit === 'metric';
  const windSpeedUnit = isMetric ? 'km/h' : 'mph';
  const windSpeed = isMetric ? wind.speed : (wind.speed * 0.621371).toFixed(2);

  return (
    <div className='rounded-3xl bg-surface font-bold text-on-surface-variant-2 p-4 min-w-[120px] text-center mx-4'>
      <p>{formatDateTime(secs, timezone, "hh:mm a")}</p>
      <img
        src={direction}
        alt="wind direction icon"
        className='w-14 h-14 mx-auto'
        style={{
          rotate: `${wind.deg}deg`
        }}
      />
      <p>{windSpeed} {windSpeedUnit}</p>
    </div>
  );
}

export default TodayAtCard2;
