import moon from "../assets/weather_icons/01n.png"


const TodaysHighlights = () => {
    return (
        <div className='card-sm'>
            <p className='font-bold text-2xl mb-4'>Todays Highlights</p>

            <div className='card-variant '>
                <p className='font bold md:text-xl flex justify-between mb-4'>Air Quality Index <span>Good</span></p>

                <div className='flex items-center justify-between md:text-3xl'>
                    <img src={moon} alt="" className='w-11' />

                    <div className='  '>
                        <p>23.3 <span className='text-[10px] md:text-lg'>PM2.5</span></p>
                        <p>23.3 <span className='text-[10px] md:text-lg'>PM2.5</span></p>
                    </div>
                    <div className=' '>
                        <p>23.3 <span className='text-[10px]'>PM2.5</span></p>
                        <p>23.3 <span className='text-[10px]'>PM2.5</span></p>
                    </div>

                </div>

            </div>

            <div className='card-variant'>
                <p className='card-title'> Sunrise & Sunset</p>
                <div className='flex md:items-center md:justify-around flex-col md:flex-row gap-4'>
                    <div className='flex gap-7 '>
                        <img src={moon} alt="" className='w-11 ' />
                        <p className='flex flex-col text-on-surface-variant'>Sunrise <span className='text-3xl text-on-surface-variant-2'>6:30 AM</span></p>
                    </div>
                    <div className='flex  gap-7'>
                        <img src={moon} alt="" className='w-11' />
                        <p className='flex flex-col text-on-surface-variant'>Sunset <span className='text-3xl text-on-surface-variant-2'>6:30 PM</span></p>
                    </div>


                </div>
            </div>

            <div className='card-variant'>
                <p className="card-title">
                    Humidity
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <img src={moon} alt="" className='w-11' />
                    <p>35%</p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Pressure
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <img src={moon} alt="" className='w-11' />
                    <p>1052<span className='text-xl'>hPa</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Visibility
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <img src={moon} alt="" className='w-11' />
                    <p>10<span className='text-xl'>km</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Feels Like
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <img src={moon} alt="" className='w-11' />
                    <p>25<span className='text-xl'>°c</span></p>
                </div>
            </div>
        </div>
    )
}

export default TodaysHighlights