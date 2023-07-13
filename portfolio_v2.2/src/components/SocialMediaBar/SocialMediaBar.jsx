import facebook from '../../assets/social/facebook.png';
import instagram from '../../assets/social/instagram.png';
import linkedin from '../../assets/social/linkedin.png';
import twitter from '../../assets/social/twitter.png';
import useMediaQuery from '../../hooks/useMediaQuery'; 

export default function SocialMediaBar() {
    let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    !isSmallScreen ?  
    <div className='flex gap-20 w-full justify-center overflow-hidden mt-5 mb-10 group'>
        <div className='relative translate-x-1/2 transition ease-linear delay-300 text-xl font-sans after:contents after:opacity-0 after:absolute after:w-14 after:h-[1.5px] after:bg-white after:top-2/4 after:ml-1 group-hover:translate-x-0 group-hover:after:opacity-100'>
            <span className='text-2xl cursor-pointer rounded-lg animate-lighting'>{"Follow/Contact me >"} </span>
        </div>
        <nav className='flex list-none gap-5'>
            <li className='cursor-pointer hover:opacity-50 -translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={facebook} alt="facebook" />
            </li>
            <li className='cursor-pointer hover:opacity-50 translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={instagram} alt="instagram" />
            </li>
            <li className='cursor-pointer hover:opacity-50 -translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={linkedin} alt="linkedin" />
            </li>
            <li className='cursor-pointer hover:opacity-50 translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={twitter} alt="twitter" />
            </li>
        </nav>
    </div>
    :
    <div className='list-none flex gap-10 cursor-pointer'>
        <li><img src={facebook} alt="facebook" /></li>
        <li><img src={instagram} alt="facebook" /></li>
        <li><img src={linkedin} alt="facebook" /></li>
        <li><img src={twitter} alt="facebook" /></li>

    </div>
    
  )
}