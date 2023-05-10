
//import image 
import img_banner_image from '../../util/img/banner/consultant_banner.svg';
import img_banner_logo from '../../util/img/banner/liveclass_banner_logo.svg';
//jordan oeter son
//banner background

import img_bg_1 from '../../util/img/enat4.png';
import img_bg_2 from '../../util/img/enat5.png';
import img_bg_3 from '../../util/img/enat6.png';

function BannerLiveClass(){
return (
		<div class="shadow-md max-w-screen-xl pr-8 mx-auto flex flex-col lg:flex-row items-start h-[350px] sm:h-[400px] md:h-[580px] bg-no-repeat bg-cover  bg-center  md:bg-none">
		
		<div class="absolute w-full">
				<div class="related top-0 left-0 w-full">
					<img  data-aos="fade-up" data-aos-once="true" class="relative left-0 top-0" src={img_banner_logo} alt="img"/>
				</div>
			</div>
		
			{/*<!--Left Col-->**/}
			<div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0 md:px-5 ">
				
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8">
                    <small>THE FASTEST WAY TO GIVE YOUR CHILD OR TEEN 21ST CENTURY SKILLS</small>
                </p>
                

                <h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
				  <span class="md:text-darken text-4xl">Live Online Coding Clases</span>
				</h1>
				
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8">
                    <small>Join our community of online students. Learn real coding from expert teachers from the comfort of home.</small>
                </p>
                {/*
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Join for free
					</button>
					<div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						<button class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
							</svg>
						</button>
						<span class="cursor-pointer">Watch how it works</span>
					</div>
				</div>
                */}
			</div>
			
			{/*<!--Right Col-->*/}
			<div class="w-full lg:w-6/12 lg:-mt-10 relative hidden sm:hidden md:show lg:show" id="girl" >
				{/*<!-- calendar -->*/}
				<div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4">
					<img class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="img/calendar.svg" />
				</div>
				{/*<!-- red -->*/}
				<div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating">
					<svg class="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"/></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"/><path d="M74.5 54.425V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M83.125 63.9125V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
				</div>
				{/*<!-- ux class -->*/}
				<div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
					<img class="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28" src="img/ux-class.svg" alt="" />
				</div>
				{/*<!-- congrats -->*/}
				<div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4">
					<img class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="img/congrat.svg" alt="" />
				</div>
			</div>
			
		</div>
	)
}

export default BannerLiveClass;

