import img_skillthey from '../../util/img/skillsthery.svg';

function NextItme(){
	return (
		<>
			<div className="bg-gray-100 px-2 border ">
			
				<div className="flex bg-white px-3 mb-5 gap-4">
					<button className="float-left">left</button>
						
						center
						
					<button className="float-right">left</button>
				</div>
			
				<div className="m-10 bg-white relative  pt-10 px-10  m:10 flex flex-col lg:flex-row items-start rounded-xl">			

					<div className="w-[100%] sm:w-[100%] md:w-[33%]">
						<h1 className="font-bold text-lg md:pb-5">Skills They'll Learn</h1>
						<ul className="pl-3 mb-4 list-inside">
							<li>• mathematics, science and<br/>  english topics suitable fro grade 1 student</li>
							<li>• Bulding a progeram</li>
							<li>• Critical thinking</li>
							<li>• Computational thinking</li>
							<li>• Problem solving</li>
						</ul>
						<button className="my-10 rounded-xl lg:mx-0 bg-yellow-500 text-white text-xl font-bold  py-2 px-5 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out over:bg-blue-700">View Detail</button>
			
					</div>
					
					<div className="w-[100%] sm:w-[100%] md:w-[33%] sm:mb-2">
						<h1 className=" font-bold text-lg md:pb-5">Subject based coding course</h1>
						
						<div className="pl-3 mb-4">
							<span>Match Grade 1</span><br/>
							<span>Science Grade 1</span><br/>
							<span>English Grade 1</span><br/>
							
						</div>
						
						<h1 className="font-bold text-lg">Technology based courses</h1>
						<div className="pl-3 sm:mb-2 md:pb-5">
							<span>scratch jr</span><br/>
							<span>robotics001</span><br/>
							<span>space001</span><br/>
						</div>
						
					</div>
					<div className="w-[100%] sm:w-[100%] md:w-[33%] sm:mb-2">
						<img src={img_skillthey} alt="i" />
					</div>
				</div>
				
				</div>
		</>
	)
}

export default NextItme;
