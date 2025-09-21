import LogoHero from '../img/logohero.png'


export default function Hero() {
  return (
    <section id="home" className="bg-[#EFEFF2] pt-[23px] pb-[35px] md:py-[62px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center  ">
          <div className="text-[58px] md:text-[48px]">
            <h1 className="font-semibold font-archivo text-[#303030] mb-4 md:flex-1">
              The yield-backed 
              stablecoin protocol 
              boosting DeFi
              <img 
                src={LogoHero} 
                alt="icon" 
                className="md:hidden inline-block w-[60px] align-baseline"/> <br />
              liquidity
            </h1>
            <p className="text-[20px] font-inter text-[#818182] mb-6">
              Keep your yield working for you — we keep your liquidity accessible
            </p>
          </div>
          <img className="hidden md:flex " src={LogoHero} alt="LogoHero" />
        </div>
      
        <div className="flex justify-around md:justify-start space-x-4 font-archivo font-semibold text-[16px] leading-140 tracking-wider2">
          <button className="text-[18px] px-[30px] py-[17px] md:px-[107px] rounded-full bg-[#2D2D2D] text-[#F7F7F7]">
            Join Whitelist
          </button>
          <button className="flex text-[18px] px-[30px] py-[17px] md:px-[62px] rounded-full bg-[#E6E8EC] text-[#2E2E2E]">
            Read Docs 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="ml-[10px] w-6 h-6">
                <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h10.19L8.72 4.28a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L11.94 8.75H1.75A.75.75 0 0 1 1 8z" clipRule="evenodd" />
              </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
