import img_banner_image from '../../util/img/banner/tutor_banner.svg';
import img_banner_logo from '../../util/img/banner/tutor_banner_logo.svg';

import img_svg1 from '../../util/img/calendar.svg';
import img_svg2 from '../../util/img/ux-class.svg';
import img_svg3 from '../../util/img/congrat.svg';

function BannerTutor(){
	return (
		<div class="bg-cream">
		
		<div class="bg-[#08B0F8] max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start ">
			
			
			{/**<!--Left Col-->**/}
			<div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
				
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-white my-4  leading-normal text-1xl mb-3">
				THE FASTEST WAY TO GIVE YOUR CHILD OR TEEN 21ST CENTURY SKILLS
				</p>
				
				<h1 data-aos="fade-right" data-aos-once="true" className="text-white my-4 text-2xl font-bold leading-tight">
					Live Online Coding Classes
				</h1>
				
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-white my-4  leading-normal text-1xl mb-8">
				Join our community of online students. Learn real coding from expert teachers from the comfort of home.
				</p>
			</div>
			{/*<!--Right Col-->*/}
			<div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
				{/*<!-- calendar -->*/}
				<div class="w-fill border ">
				<img data-aos="fade-up" data-aos-once="true" class="right-0 w-10/12 2xl:-mb-20" src={img_banner_logo} />
				</div>
			</div>
			<div class="absolute right-0 w-fill border ">
				<img data-aos="fade-up" data-aos-once="true" class="relative right-0 w-10/12 2xl:-mb-20" src={img_banner_image} />
			</div>
				
		</div>
		
	</div>

	)

}

export default BannerTutor;
