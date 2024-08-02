import formatDateTime from "../../utils/formatDateTime";

const TodayAtCard = ({ secs, temperature, icon, timezone, unit }) => {
  const temperatureUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className='rounded-3xl bg-surface font-bold text-on-surface-variant-2 p-4 min-w-[120px] text-center mx-4'>
      <p>{formatDateTime(secs, timezone, "hh:mm a")}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" className='w-14 h-14 mx-auto' />
      <p>{temperature} {temperatureUnit}</p>
    </div>
  );
}

export default TodayAtCard;
