import hero from '../assets/imgs/hero.jpeg'
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar';

function Home() {
  
  return (
    <section className="flex justify-between content-center flex-col-reverse md:flex-row items-center">
    {/*hero section for text */}
      <div className="w-1/2 flex flex-col lighting items-center">
        <h1 className="relative inline-block md:text-4xl text-lg">Ahmed Eldessouki, PMP®</h1>
        <p className="text-sm m-10 leading-relaxed w-[370px] md:w-full">
          {
            "Experienced Commissioning & Start-up Manager in power plants and oil/gas industries. Specialize in gas turbines, fuel gas treatment stations, and optimizing operations. Skilled in troubleshooting, maintenance planning, and safety protocols. Track record of exceeding client expectations. Let's connect for potential collaborations."
          }
        </p>
        <SocialMediaBar />
      </div>

    {/*hero section for img */}
      <div className='relative flex justify-center m-5 w-80 h-full md:before:absolute md:before:w-full md:before:h-full md:before:border-2 md:before:border-blue-200 md:before:z-10 md:before:right-10 md:before:-top-10 md:before:rounded-t-full md:before:max-w-[400px] '>
      <img className='z-20 hover:filter hover:saturate-200 transition duration-500 md:h-[400px] h-[200px] rounded-t-full' src= {hero} alt="ahmed eldessouki" />
      </div>
    </section>
  )
}

export default Home;
