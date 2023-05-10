import howdo from '../../util/img/howdo.svg';


function HowDo(){
	return (

	<div className=" px-2 border ">
			
			<div className="text-center text-black  mt-10 mb-9">
				<h1 class="text-3xl font-bold">HOW DO ONLINE PRIVATE LESSONS WORKS ?</h1>
			</div>
			
			<div className="relative  px-10 flex flex-col lg:flex-row items-start ">

				<div className="w-[50%] border">
					<img data-aos="fade-up" data-aos-once="true" class="w-10/12 mx-auto 2xl:-mb-20" src={howdo} />
				</div>
					
				<div className="h-full border">
					<li>1. Sign up for your Free Trial Session</li>
					<li>1. Complete the Codakid Questionaire to set upup a convenient schedule for you familly</li>				
					<li>1. Get matched with an expert CodaKid instructor based on you learing style</li>
					<li>1. Begin private session</li>
					<li>1. Get homework assignment and weekly progress reports with yaluable feedbak</li>
				</div>
				
			</div>
			
			<div class="bg-white ">
				<span class="px-100">space</span>
			</div>
			
	</div>
				
				

	)

	
}


export default HowDo;
