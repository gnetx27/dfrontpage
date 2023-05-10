import howdo from '../../util/img/howdo.svg';
import img_1 from '../../util/img/liveclass1.svg';


function HowDo(){
return (
<>
	<div className=" mt-20">
			
			<div className="text-center text-black  mt-10 mb-9">
				<h1 class="text-3xl font-bold">HOW DO ONLINE PRIVATE LESSONS WORKS ?</h1>
			</div>
			
			<div className="relative  px-10 flex flex-col lg:flex-row items-start ">

				<div className="w-[50%]">
					<img data-aos="fade-up" data-aos-once="true" class="w-10/12 mx-auto 2xl:-mb-20" src={howdo} />
				</div>
					
				<div className="h-full ">
					<li>1. 2Sign up for your Free Trial Session</li>
					<li>1. Complete the Codakid Questionaire to set upup a convenient schedule for you familly</li>				
					<li>1. Get matched with an expert CodaKid instructor based on you learing style</li>
					<li>1. Begin private session</li>
					<li>1. Get homework assignment and weekly progress reports with yaluable feedbak</li>
				</div>
				
			</div>
			
			<div class="bg-white ">
			
			</div>
			
	</div>

	<div className="m-30 flex justify-center mx-20 mb-4 bg-white">
		<img className="w-[400px] h-[400px]"src={img_1} />
	</div>
				
				
	</>
	)

	
}


export default HowDo;
