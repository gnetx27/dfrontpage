/*import codingkidsteens from '../../util/img/Card/codingkidsteens.svg';
import parents from '../../util/img/Card/parents.svg';
import education from '../../util/img/Card/education.svg';
import consultanc from '../../util/img/Card/consultanc.svg';
import tutoring from '../../util/img/Card/tutoring.svg';
*/

import codingkidsteens from '../../util/img/Card/316x387.jpg';
import parents from '../../util/img/Card/316x387.jpg';
import education from '../../util/img/Card/316x387.jpg';
import consultanc from '../../util/img/Card/316x387.jpg';
import tutoring from '../../util/img/Card/316x387.jpg';


function BodyTmp(){
    return (
        <>
        <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden ">
  
        <div className="sm:flex items-center sm:space-x-8 mt-36">
          <div data-aos="fade-right" className="sm:w-1/2 relative aos-init">
            <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse" />
            <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">Education</h1>
            <p className="py-5 lg:pr-32 ">
            We offer a range of subject-based STEM, Coding, and Robotics Courses and curricula aligned 
            with Ethiopia's national education curriculum, that provides hands-on learning experiences and 
            practical solutions to real-world problems. Our online platform is accessible to anyone, 
            anywhere, and our courses are designed to be engaging, interactive, and fun

             </p>
            <div style={{background: '#F56666'}} className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping" />
         
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0 aos-init">
            <div style={{background: '#23BDEE'}} className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3" />
            <img className="w-[610px] h-[380px] rounded-xl z-40 relative" src={codingkidsteens} alt="" />
              
            <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
          </div>
        </div>
        
        {/* parents */}
        <div className="md:flex mt-40 md:space-x-10 items-start">
          <div data-aos="fade-down" className="md:w-5/7 relative aos-init">
            <div style={{background: '#33EFA0'}} className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse" />
            <div style={{background: '#33D9EF'}} className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping" />
            <img className="w-[580px] h-[370px] relative z-50 floating " src={parents} alt="" />
            <div style={{background: '#5B61EB'}} className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse" />
            <div style={{background: '#F56666'}} className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping" />
          </div>
          <div data-aos="fade-down" className="md:w-5/12 mt-20 md:mt-0 text-gray-500 aos-init">
            <h1 className="text-2xl font-semibold text-darken lg:pr-40">Lab Service</h1>
            <div className="flex items-center space-x-5 my-5">
              <p>
              <div style={{background: '#156123'}} className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping" />
         
              We offer comprehensive lab services to help students gain practical experience and develop 
hands-on skills. Our labs are equipped with state-of-the-art tools and equipment to provide 
students with a safe and comfortable learning environment
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
          <div data-aos="fade-right" className="md:w-1/2 lg:pl-14 aos-init">
            <h1 className="text-darken font-semibold text-2xl lg:pr-56">Research Consultancy</h1>
            <p className="text-gray-500 my-4 lg:pr-32">
            ur research consultancy services help individuals, organizations, and businesses solve realworld problems by providing expert guidance and innovative solutions. Our team of 
experienced researchers and consultants is dedicated to delivering results that exceed 
expectations.</p>
          </div>
          <img data-aos="fade-left" className="md:w-1/2 aos-init rounded-xl" src={education} />
        </div>

        {/* Assessments, Quizzes, Tests */}
        <div className="mb-10 mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
          <div data-aos="fade-right" className="md:w-6/12 aos-init">
            <img className="md:w-11/12 w-[610px] h-[380px]" src={consultanc} />
          </div>
          <div data-aos="fade-left" className="md:w-6/12 md:transform md:-translate-y-20 aos-init">
            <h1 className="font-semibold text-darken text-2xl lg:pr-64">Organizing STEM Labs</h1>
            <p className="text-gray-500 my-5 lg:pr-52">
            We provide a comprehensive range of services to help schools and educational institutions 
organize STEM labs. From designing lab spaces to providing equipment and training, we offer 
everything you need to create a world-class STEM lab that fosters innovation and creativity
</p>
          </div>
        </div>
        

        </div>
        </>
    )
}


export default BodyTmp;
