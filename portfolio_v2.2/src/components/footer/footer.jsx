import {AiOutlineMail} from 'react-icons/ai';
import useMediaQuery from '../../hooks/useMediaQuery';

function Footer() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <section className="z-10 flex justify-between items-center w-10/12 h-10 px-10 bg-navBar rounded-t-lg">
     {!isSmallScreen && <div>Ahmed Eldessouki portfolio App, created 2023</div>}
     <div className='flex justify-center items-center gap-4'>
      <div className='text-3xl'>
        <AiOutlineMail />
      </div>
      ahmed.dosoky1982@outlook.com | ahmed.dosoky1982@gmail.com
     </div>
    </section>
  )
}

export default Footer