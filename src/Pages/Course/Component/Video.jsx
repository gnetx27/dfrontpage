function Video(){
	return (
		
		<div class="bg-white relative max-w-screen-xl p-9 mx-auto flex flex-col lg:flex-row items-start md:gap-8">			
			
			{/**<!--Left Col-->**/}
			<div class="bg-red-100 flex flex-col w-full lg:w-6/12 justify-center  items-start text-center lg:text-left mb-5 md:mb-0">
				<iframe class="w-full md:h-[300px]" src="https://www.youtube.com/embed/7OKoRAHKZz8" title="Adam vs. Tina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			
			{/*<!--Right Col-->*/}
			<div class="flex flex-col w-full lg:w-6/12 justify-center items-start text-center lg:text-left sm:text-center mb-5 md:mb-0">
				<h1 data-aos="fade-right" data-aos-once="true" className="my-2 font-bold leading-tight text-2xl">
					Dynamo is more than just coding,<br/> Robotics, math and Science!.
				</h1>
				
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal  mb-8">
					Our proprietary, activity-based curriculum with live, real-time instruction generates: Problem Solving. Creative Thinking. Grit. Confidence. Communication.
				</p>
				
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold  py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out over:bg-blue-700">
						GET START FOR FREE
					</button>
					
				</div>
				
			</div>
		</div>

		
		);
}

export default Video;
