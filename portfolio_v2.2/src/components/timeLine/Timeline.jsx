import location from '../../assets/timeLine/location.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function TimeLine( {cardDirection, icon, jobTitle, jobDescription, projectLocation, duration} ) {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    !isSmallScreen ? (
    <div className={`relative flex justify-center w-full`}>
    {/*div of center line time line */}
      <div className='w-1 h-72 bg-white'></div>
    {/*div of the time line component img, left and right data block and location icon */}
      <div className={`flex ${cardDirection === "right"? "flex-row-reverse translate-x-[21%]" : "translate-x-[-21%]"} absolute  gap-5`}>
        <div className={`w-96 h-auto bg-slate-300 rounded `}>
          <h4 className='ml-1 text-gray-600 capitalize text-xl'> {jobTitle}</h4>
          <p className='m-2 text-black text-sm'>{jobDescription}</p>
          <div className='flex w-full mt-5'>
            <img className='w-10 inline-block' src={location} alt="location" />
            <p className='w-full inline-block text-red text-lg'>{projectLocation}</p>
          </div>
        </div>
    {/*div related to the icons or image associated with the center line */}
        <div className='mt-5 w-16 h-16 rounded-full bg-slate-100'>
          <img className='w-14 mx-auto' src={icon} alt="role" /> 
        </div>
    {/*span related to the time line identified date or time period */}
        <span className={`block w-32 my-10`}>{duration}</span>
      </div>
    </div>
  ) :
  ( 
    <section className='my-10 translate-x-[5%]'>
      <span className={`block w-full my-1`}>{duration}</span>
      <div className={`w-96 h-auto bg-slate-300 rounded `}>
        <h4 className='ml-1 text-gray-600 capitalize text-xl'> {jobTitle}</h4>
        <p className='m-2 text-black text-sm'>{jobDescription}</p>
        <div className='flex w-full mt-5'>
          <img className='w-10 inline-block' src={location} alt="location" />
          <p className='w-full inline-block text-red text-lg'>{projectLocation}</p>
        </div>
      </div>
    </section>
    )
  )
}