import img_card2 from '../../util/img/parentcourse1.svg';
import img_card3 from '../../util/img/parentcourse2.svg';
import img_card4 from '../../util/img/parentcourse3.svg';
import img_card5 from '../../util/img/parentcourse4.svg';
import img_card6 from '../../util/img/parentcourse5.svg';
import img_off from '../../util/img/63off.svg';
import img_lineor from '../../util/img/lineor.svg';


function SchoolCourseBody(){
    return (
        <>
            <div className="bg-[#08B0F8] pt-5">
                
                <div className="felx text-center">
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">Free 1</button>
                        
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">K-2</button>
                        
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">Elementary School</button>
                        
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">Middke School</button>
                        
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">K-8</button>
                        
                        <button className="hover:bg-white p-3 rounded-tl-lg  rounded-tr-lg font-bold mx-3">High School</button>
                        
                </div>

            </div>

            
<div className="grid md:grid-cols-4 gap-14 md:gap-5 p-3">
          
          <div data-aos="fade-up" className="pb-2 bg-white shadow-xl  rounded-xl aos-init hover:bg-red">
             
              <div className="p-3">
                  <b className="text-left">K-8 Plan</b>
                  <div>
                  <div className="px-5">
                  <li>31 Icon & Block Coding Courses</li>
                  <li>Lesson Plans</li>
                  <li>Automatic Grading</li>
                  <li>School Progress Metrics</li>
                  <li>Premium Training & Support</li>
                  <li>School Year Plan</li>

                    $20/student (50 student min)
                    
                  </div>
                  </div>
              </div>
            <img src={img_lineor}/>
              <div className="flex">
                <div className="text-left w-[50%] px-4">
                    <b>$3,000</b> per shcool up to 600 students
                </div>
                <div className="text-right w-[50%]">
                    <img src={img_off}/>
                </div>
              </div>
            
              <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                Request
                            </button>
                            </div>
          </div>


          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card2}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#2EA7FF] ">
                            <h3 className="font-bold pl-10 font-bold">Bilogy Grade 7</h3>
                            <span className="pl-10">Course:</span><span>Subject based</span><br/>
                            <span  className="pl-10">Age:</span><span>10-14</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#43C1F8] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                Subscribe
                            </button>
                            </div>
                        </div>
          </div>
         


          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card3}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#FF8F05]">
                        <h3 className="font-bold pl-10 font-bold">Scratch Programing</h3>
                            <span className="pl-10">Type:</span><span>Short term</span><br/>
                            <span  className="pl-10">Age:</span><span>10-14</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#43C1F8] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                            Subscribe
                            </button>
                            </div>
                        </div>
          </div>
         
          
          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card4}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#FD92A1]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#43C1F8] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                            Subscribe
                            </button>
                            </div>
                        </div>
          </div>


         

</div>
        </>
    );
}

export default SchoolCourseBody;
