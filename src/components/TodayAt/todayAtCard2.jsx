import formatDateTime from "../../utils/formatDateTime"
import direction from "../../assets/weather_icons/direction.png"

const TodayAtCard2 = ({ secs, timezone, wind }) => {
  return (
    <div className='rounded-3xl bg-surface font-bold text-on-surface-variant-2 p-4 min-w-[120px] text-center mx-4'>
      <p>{formatDateTime(secs, timezone, "hh:mm a")}</p>
      <img src={direction} alt="weather icon" className={`w-14 h-14 mx-auto `}

        style={{
          rotate: `${wind.deg}deg`
        }}
      />
      <p>{wind?.speed} km/h</p>
    </div>
  )
}

export default TodayAtCard2