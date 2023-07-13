import TimeLine from '../components/timeLine/Timeline';
import useMediaQuery from '../hooks/useMediaQuery';
import manager from '../assets/timeLine/manager.svg';
import engineer from '../assets/timeLine/engineer.svg';
import experiances from '../../data/experiance.js';

export default function Projects() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <section id='Projects' className = 'relative pt-10 pb-24 ml-1 md:mx-auto md:w-10/12'>
        {/*header and img section*/}
        <div className='order-2 md:flex justify-between items-center'>
            <span className='uppercase font-playfair font-semibold text-xl md:text-4xl mb-5 ml-5'>
                Pro<p className ='inline text-red'>jects</p>
            </span>
        </div>
        <div className='mt-10'>
        {
          experiances.map(
            exp => <TimeLine key={exp.id} duration = {exp.duration} projectLocation = {exp.location} jobDescription={exp.jobDescription} jobTitle = {exp.jobTitle} icon = {manager} cardDirection = {`${exp.id % 2 > 0 ? (isSmallScreen ? "right":"left"): "right"}`}/>
          )
        }
         
        </div>

    </section>
  )
}
