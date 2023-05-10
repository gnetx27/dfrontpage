import Cmpanies from './Cmpanies';
//import Card4 from '.Card4';
import Skill from './Skill';



//load images
import codingkidsteens from '../../util/img/Card/codingkidsteens.svg';
import parents from '../../util/img/Card/parents.svg';
import education from '../../util/img/Card/education.svg';
import consultanc from '../../util/img/consultant.svg';

import tutoring from '../../util/img/Card/tutoring.svg';
import book from '../../util/img/Card/books.svg';
import testimonials from '../../util/img/testimonials.png';

import laptop from '../../util/img/laptop-news.png';
import laptchildren from '../../util/img/children-laptop.png';
import girl from '../../util/img/girl-laptop.png';
import cat from '../../util/img/cat-laptop.png';


function HomeBody(){
	return (
	<div class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
		<Cmpanies />
		
		
		{/* <!-- card --> */}
		{/* <Card4 /> */ }

		{/* <!-- lorem --> */}
		<div class="mt-28">
			<div data-aos="flip-down" class="text-center max-w-screen-md mx-auto">
				<h1 class="text-3xl font-bold mb-4">What is<span class="text-yellow-500">Skilline?</span></h1>
				<p class="text-gray-500">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
			</div>
			<div data-aos="fade-up" class="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7">
				<div class="relative md:w-5/12">
					<img class="rounded-2xl" src="img/Rectangle 19.png" alt="" />
					<div class="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
						<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<h1 class="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">FOR INSTRUCTORS</h1>
							<button class="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">Start a class today</button>
						</div>
					</div>
				</div>
				<div class="relative md:w-5/12">
					<img class="rounded-2xl" src="img/Rectangle 21.png" alt="" />
					<div class="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
						<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<h1 class="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">FOR STUDENTS</h1>
							<button class="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">Enter access code</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="sm:flex items-center sm:space-x-8 mt-36">
			<div data-aos="fade-right" class="sm:w-1/2 relative">
				<div class="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 class="font-semibold text-2xl relative z-50 text-darken lg:pr-10">Coding Program for Kids <span className="text-yellow-500">and Teens</span></h1>
				<p className="py-5 lg:pr-32 ">
                Dynamo powers the creativity of students and serves thousands of schools and educators worldwide.
                Our interactive subject based learning allows kids and teens to learn math,science,coding and robotics with easy block-based coding challenges before seamlessly transitioning to real-world text-based languages like JavaScript and Python.
                With 70+ award-winning courses, there’s a learning path for every student, no matter their age or level. We have over 5,000 lessons, backed by hundreds of built-in tutorials, hands-on projects and interactive assessments. 
            </p>
				
			</div>
			<div data-aos="fade-left" class="sm:w-1/2 relative mt-10 sm:mt-0">
				<div class="bg-[#23BDEE] floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img class="rounded-xl z-40 relative" src={codingkidsteens} alt="" />
				{ /*<button class="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50" />
					<svg class="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE" />
					</svg>
				</button> */ }
				<div class="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
		</div>

		<div class="md:flex mt-40 md:space-x-10 items-start">
			<div data-aos="fade-down" class="md:w-7/12 relative">
				<div class="bg-[#33EFA0] w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"></div>
				<div class="bg-[#33D9EF] w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"></div>
				<img class="relative z-50 floating" src={parents} alt="" />
				<div class="bg-[#5B61EB] w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"></div>
				<div class="bg-[#F56666] w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"></div>
			</div>
			<div data-aos="fade-down" class="md:w-5/12 mt-20 md:mt-0 text-gray-500">
				<h1 class="text-2xl font-semibold text-darken lg:pr-40">Parent</h1>
				<div class="flex items-center space-x-5 my-5">
					<p>
					  Coding plays a pivotal role in our daily lives from cars and coffee makers to life-changing advancements in medicine, environmental conservation, space exploration, and much more.
					  At Tynker, we teach kids and teens to code through both  our self-paced, game-like courses and our subscriptions plans start kids off with personalized coaching sessions.
					  We guide children along the path to coding certification  for all ages and skill levels. Our proven methodology will advance to real-world Python, Web Dev, Data Science 
					  and more!
					</p>
				</div>
				
			</div>
		</div>
		
		{/* Education */}
		<div class="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
			<div data-aos="fade-right" class="md:w-1/2 lg:pl-14">
				<h1 class="text-darken font-semibold text-3xl lg:pr-56">Educators</h1>
				<p class="text-gray-500 my-4 lg:pr-32">
					Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!
					Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!
					Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources.
				</p>
			</div>
			<img data-aos="fade-left" class="md:w-1/2" src={education} />
		</div>

		
		{/* Consultant */}
		<div class="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
			<div data-aos="fade-right" class="md:w-6/12">
				<img class="md:w-11/12" src={consultanc} />
			</div>
			<div data-aos="fade-left" class="md:w-6/12 md:transform md:-translate-y-20">
				<h1 class="font-semibold text-darken text-3xl lg:pr-64">Consultant</h1>
				<p class="text-gray-500 my-5 lg:pr-52">
				technology consultant who improves their efficiency through technical advice and solutions.
			</p>
			</div>
		</div>

		{/* Tutoring */}
		<div class="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
			<div data-aos="fade-right" class="md:w-1/2 lg:pl-14">
				<h1 class="text-darken font-semibold text-3xl lg:pr-56">Tutoring</h1>
				<p class="text-gray-500 my-4 lg:pr-32">
					One-on-One tutoring to help your kid achieve their highest potential and gain a competitive edge for college & universities. Get tutoring in different coding, design and technology courses or prepare for an AP Computer Science Test.
				</p>
			</div>
			<img data-aos="fade-left" class="md:w-1/2" src={tutoring} />
		</div>
		
		{/* book */}
		<div class="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
			<div data-aos="fade-right" class="md:w-6/12">
				<img class="md:w-3/2 md:pl-10" src={book} />
			</div>
			<div data-aos="fade-left" class="md:w-6/12 md:transform md:-translate-y-20">
				<h1 class="font-semibold text-darken text-3xl lg:pr-64">Book and educational kits</h1>
				<p class="text-gray-500 my-5 lg:pr-52">
				educational books and STEM materials
			</p>
			</div>
		</div>


		

		<button data-aos="flip-up" class="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block">See more features</button>

		{/* <!-- INTEGRATIONS  --> */}
		<div class="mt-24 flex flex-col md:flex-row items-start md:space-x-10">
			<div data-aos="zoom-in-right" class="md:w-6/12">
				<img class="md:w-8/12 mx-auto" src="img/integrations.png" />
			</div>
			<div data-aos="zoom-in-left" class="md:w-6/12">
				<div class="flex items-center space-x-20 mb-5">
					<span class="border border-gray-300 w-14 absolute"></span>
					<h1 class="text-gray-400 tracking-widest text-sm">INTEGRATIONS</h1>
				</div>
				<h1 class="font-semibold text-darken text-2xl lg:pr-40">200+ educational tools and platform <span class="text-yellow-500">integrations</span></h1>
				<p class="text-gray-500 my-5 lg:pr-20">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
				<button class="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">See All Integrations</button>
			</div>
		</div>

		{/* <!-- TESTIMONIAL  --> */}
		<div class="mt-24 flex flex-col-reverse md:flex-row items-start md:space-x-10">
			<div data-aos="zoom-in-right" class="md:w-5/12">
				<div class="flex items-center space-x-20 mb-5">
					<span class="border border-gray-300 w-14 absolute"></span>
					<h1 class="text-gray-400 tracking-widest text-sm">TESTIMONIAL</h1>
				</div>
				<h1 class="font-semibold text-darken text-2xl lg:pr-40">What They Say?</h1>
				<p class="text-gray-500 my-5 lg:pr-36">Skilline has got more than 100k positive ratings from our users around the world.</p>
				<p class="text-gray-500 my-5 lg:pr-36">Some of the students and teachers were greatly helped by the Skilline.</p>
				<p class="text-gray-500 my-5 lg:pr-36">Are you too? Please give your assessment</p>
				<button class="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
					<span>Write your assessment</span>
					<div class="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
						<svg class="w-5 h-5" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F48C06"/>
						</svg>
					</div>
				</button>
			</div>
			<div data-aos="zoom-in-left" class="md:w-7/12">
				<img class="md:w-10/12 mx-auto" src={testimonials} />
			</div>
		</div>

		{/* <!-- Latest News and Resources  --> */}
		<div data-aos="zoom-in" className="mt-16 text-center aos-init">
          <h1 className="text-darken text-2xl font-semibold">Latest News and Resources</h1>
          <p className="text-gray-500 my-5">See the developments that have occurred to Skillines in the world</p>
        </div>

        <div data-aos="zoom-in-up" className="my-14 flex flex-col lg:flex-row lg:space-x-20 aos-init">
          <div className="lg:w-6/12">
            <img className="w-full mb-6" src={laptop} />
            <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">NEWS</span>
            <h1 className="text-gray-800 font-semibold my-3 text-xl">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h1>
            <p className="text-gray-500 mb-3">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <a href className="underline">Read more</a>
          </div>
          <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img className="rounded-xl w-full" src={laptchildren} />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">PRESS RELEASE</span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img className="rounded-xl w-full" src={girl} />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Zoom’s earliest investors are betting millions on a better Zoom for schools</h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Zoom was never created to be a consumer product. Nonetheless, the...</p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img className="rounded-xl w-full" src={cat} />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">This year, investors have reaped big financial returns from betting on Zoom...</p>
              </div>
            </div>
          </div>
        </div>
		
	</div>
	
	
	  
	  )
}

export default HomeBody;
