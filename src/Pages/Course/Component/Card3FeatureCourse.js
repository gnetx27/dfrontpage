import img_car_1 from '../../util/img/math.svg';
import img_car_2 from '../../util/img/scrachp.svg';
import img_car_3 from '../../util/img/biology.svg';

const Card3FeatureCourse=()=>{
    return (
        
        <div className="grid md:grid-cols-3 gap-15 md:gap-5 pl-10 pr-10 mt-20 space-around" >
          
          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
             <img 
              className="w-full "
              src={img_car_1}
              alt="img"
              />
            
            <div className="p-2 bg-[#AE2074]">
                <h3 className="font-bold">Math grade 1</h3>
                <span>Course:</span><span>Subject based</span><br/>
                <span>Age:</span><span>4-7</span>
                <p className="font-bold text-center">400birr/year</p>
                <button class="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
                </button>

            </div>
          </div>

          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
             <img
              className="w-full"
              src={img_car_2}
              alt="img"
              />
            
            <div className="p-2 bg-[#FF8F05]">
                <h3 className="font-bold">Math grade 1</h3>

                <span>Type:</span><span>Short term</span><br/>
                <span>Age</span><span>10-14</span>
                <p className="font-bold text-center">900birr/year</p>
                <button class="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
                </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
             <img
              className="w-50"
              src={img_car_3}
              alt="img"
              />
            
            <div className="p-2 bg-[#2EA7FF]">
                <h3 className="font-bold">Math grade 1</h3>

                <span>Type:</span><span>Short term</span><br/>
                <span>Age</span><span>10-14</span>
                <p className="font-bold text-center">900birr/year</p>
                <button class="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
                </button>
            </div>
          </div>

        <div className="p-10">

        </div>
        </div>

    );
}

export default Card3FeatureCourse;
