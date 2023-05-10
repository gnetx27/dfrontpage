import { Card } from "@material-tailwind/react"

import scrachjr from '../../util/img/scrachjr.svg';



const Card4=()=>{
    return (
        <div className="grid md:grid-cols-4 gap-14 md:gap-5 mt-20 p-3">
          
          <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
             <div className="bg-[#FFA639] text-center rounded-t-lg font-bold p-3 text-white">Grades k-4</div>
             <img 
              className="rounded pl-3 mt-6"
              src={scrachjr}
              alt="img"
              />
            <button class="hover:scale-110 duration-300 ease-in-out  bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              LEARN MORE
            </button>

          </div>
           <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
             <div className="bg-[#AE2074] text-center rounded-t-lg font-bold p-3 text-white">Grades k-4</div>
             <img 
              className="rounded pl-3 mt-6"
              src={scrachjr}
              alt="img"
              />
            <button class="hover:scale-110 duration-300 ease-in-out  bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              LEARN MORE
            </button>

          </div>
          <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init">
             <div className="bg-[#08B0F8] text-center rounded-t-lg font-bold p-3 text-white">Grades 9-12</div>
               
             <img 
              className="rounded pl-2  m-6"
              src={scrachjr}
              alt="img"
              />
            <button class="hover:scale-110 duration-300 ease-in-out  bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              LEARN MORE
            </button>
          </div>
          <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init">
             <div className="bg-[#C9DE46] text-center rounded-t-lg font-bold p-3 text-white">University</div>
                 
            <img 
              className="rounded pl-2  m-6"
              src={scrachjr}
              alt="img"
              />
            <button class="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              LEARN MORE
            </button>
          </div>
          
          <div className="p-10">
          </div>
        </div>
    )
}

export default Card4;
