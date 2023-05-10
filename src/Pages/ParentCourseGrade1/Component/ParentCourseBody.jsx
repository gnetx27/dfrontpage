import img_off from '../../util/img/15offsavings.svg';
import img_5star from '../../util/img/5star.svg';

import img_card1 from '../../util/img/storecard.svg';

import img_card2 from '../../util/img/parentcourse1.svg';
import img_card3 from '../../util/img/parentcourse2.svg';
import img_card4 from '../../util/img/parentcourse3.svg';
import img_card5 from '../../util/img/parentcourse4.svg';
import img_card6 from '../../util/img/parentcourse5.svg';



function ParentCourseBody(){
    return (
        <>

<div className="grid md:grid-cols-4 gap-14 md:gap-5 p-3">
          
          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init hover:bg-red">
             
              <div className="p-3">
                  <b className="text-left">Grade 1</b>
                  <div>
                  <div className="p-5">
                    
                    <li>1 account</li>
                    <li>Grading </li>
                    <li>certification</li>
                    <li>family Progress Metrics</li>
                    <li>Premium Training & Support</li>
                    <li>Family Year Plan</li>
      
                  </div>
                  </div>
              </div>

              <div className="flex">
                <div className="text-left w-[50%] px-4">
                    1600birr
                </div>
                <div className="text-right w-[50%]">
                    <img src={img_off}/>
                </div>
              </div>
            
            <button class="hover:scale-110 duration-300 ease-in-out  bg-[#FFA639] m-5 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-xl">
              Lrean more
            </button>
          </div>


          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card2}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#AE2074]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                LEARN MORE
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
                        
                        <div className="p-2 bg-[#AE2074]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                LEARN MORE
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
                        
                        <div className="p-2 bg-[#AE2074]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                LEARN MORE
                            </button>
                            </div>
                        </div>
          </div>


          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card5}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#AE2074]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                LEARN MORE
                            </button>
                            </div>
                        </div>
          </div>

          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={img_card6}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#AE2074]">
                            <h3 className="font-bold">Math grade 1</h3>
                            <span>Course:</span><span>Subject based</span><br/>
                            <span>Age:</span><span>4-7</span>
                            <p className="font-bold text-center text-white">400birr/year</p>
                            <div className="text-center">
                            <button class="bg-[#FFB82E] text-center hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl">
                                LEARN MORE
                            </button>
                            </div>
                        </div>
          </div>

        </div>

        </>
    )
}

export default ParentCourseBody;
