//import image 
import img_banner_image from '../../util/img/banner/store.svg';
import img_banner_logo from '../../util/img/banner_logo_se.svg';

function BannerStore(){
    return (
        <>

<div class="shadow-md max-w-screen-xl pr-8 mx-auto flex flex-col lg:flex-row items-start h-[350px] sm:h-[400px] md:h-[580px] bg-no-repeat bg-cover bg-center  md:bg-none" style={{ 'backgroundImage': `url(${img_banner_image})`}}>
		
       
        
        {/**<!--Left Col-->**/}
        <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0 md:px-5 ">
            <h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
              <span class="md:text-darken text-4xl">Revolutionizing Education in Ethiopia with Practical Solutions </span>
              
            </h1>
            
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8"><small>Connecting Classroom Lessons to Real-World Problems</small></p>
            {/*<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
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
            </div>**/}
        </div>
        
        {/*<!--Right Col-->*/}
        <div class="w-full lg:w-6/12 lg:-mt-10 relative hidden sm:hidden md:show lg:show" id="girl" >
            
        </div>
        
    </div>


        </>

    )
}


export default BannerStore;
