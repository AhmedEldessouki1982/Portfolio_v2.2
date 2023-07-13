import useMediaQuery from '../hooks/useMediaQuery';
import skills from '../assets/imgs/skills.png';

export default function MySkils() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  return (
    <section className = 'mx-10 pt-10 pb-24 md:w-10/12'>
        {/*header and img section*/}
        <div className='order-2 md:flex justify-between items-center'>
            <span className='uppercase font-semibold text-xl md:text-4xl mb-5 ml-5'>
                <div className='order-2 md:flex justify-between items-center'>
            <span className='uppercase font-playfair font-semibold text-xl md:text-4xl mb-5 ml-5'>
                Ski<p className ='inline text-red'>lls</p>
            </span>
        </div>
                <h1 className='text-base normal-case md:w-[34rem] mt-5'>
                    {
                        "With expertise in gas turbines, fuel gas treatment stations, and commissioning management, I possess strong skills in troubleshooting, maintenance, process optimization, and operational excellence. My experience includes effective project management, ensuring seamless operations, and delivering successful commissioning outcomes."
                    }
                </h1>
            </span>
            
            {/*img section*/}
            <div className='m-10 md:m-1'>
            {
                !isSmallScreen?
                (
                    <div>
                        <img src= {skills} alt="skills" />                        
                    </div>
                    ):
                (
                    <img src={skills} alt="skills" />
                    )
            }
            </div>
        </div>

        {/*details of skills */}
        <div className='md:flex md:justify-between'>
            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-10 before:absolute before:w-full before:h-full before:bg-blue before:top-0 before:left-20'>
                    <span className='block z-10'>01</span>
                    <span className='relative z-20'>Experiance</span>
                </div>
                <div className='w-56 h-28 pt-2'>
                    18+ Years of Experiance, working on commissioning, start-up & opration.
                </div>
            </div>

            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-10 before:absolute before:w-full before:h-full before:bg-red before:top-0 before:left-20'>
                    <span className='block'>02</span>
                    <span className='relative z-20'>Technical</span>
                </div>
                <div className='w-80 h-28 pt-2'>
                    Instrumentation and DCS engineer based, highly experiance in process, experianced MERN stack engineer
                </div>
            </div>

            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-10 before:absolute before:w-full before:h-full before:bg-yellow before:top-0 before:left-20'>
                    <span className='block'>03</span>
                    <span className='relative z-20'>Management</span>
                </div>
                <div className='w-80 h-28 pt-2'>
                    Contribute views on designs, constructions, proposals during management meetings. Tracks multiple work task schedules, provides schedule progression updates and proactively identifies schedule constraints.
                </div>
            </div>
        </div>

    </section>
  )
}