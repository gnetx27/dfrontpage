import { Card } from "@material-tailwind/react"

import scrachjr from '../../util/img/scrachjr.svg';
import img_card from '../../util/card/card.svg';


function Choice(){
    return (
        <div>
            <div className="bg-white my-10 p-10">
                buttons
            </div>

            <div className="flex">
                <div class="w-[24%] mx-10">
                    <h3>Search</h3>
                    <div className="text-blalck w-[50%] h-1 border">
                    <hr/>
                    </div>

                    <input className="m-3" />

                    <h3>Topic</h3>
                    <div className="text-blalck w-[50%] h-1 border">
                    <hr/>
                    </div>


                    <div>
                        <input type="checkbox" />Science
                    </div>
                    <div>
                        <input type="checkbox" />Match
                    </div>
                    <div>
                        <input type="checkbox" />Robotics
                    </div>
                    <div>
                        <input type="checkbox" />Art
                    </div>
                    <div>
                        <input type="checkbox" />Tecgbology
                    </div>

                    <div>
                        <input type="checkbox" />Social Studies
                    </div>
                    <div>
                        <input type="checkbox" />Language
                    </div>
                    <div>
                        <input type="checkbox" />Coding
                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-14 md:gap-10 mt-20 p-3 flex justify-center">
                    
                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                        <div className="bg-[#FFA639] text-center rounded-t-lg font-bold p-3 text-white">SCRATCH 1</div>
                        <img 
                        className="rounded pl-3 mt-6 w-[350px] h-[200px]"
                        src={img_card}
                        alt="img"
                        />
                        
                        <button class="hover:scale-110 duration-300 ease-in-out  bg-[#FFA639] m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        LEARN MORE
                        </button>

                    </div>


                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                        <div className="bg-[#08B0F8] text-center rounded-t-lg font-bold p-3 text-white">Grades k-4</div>
                        <img 
                         className="rounded pl-3 mt-6 w-[250px] h-[200px]"
                         src={img_card}
                        alt="img"
                        />
                        

                    </div>


                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                       
                        <img 
                         className="rounded pl-3 mt-6 w-[250px] h-[200px]"
                         src={img_card}
                        alt="img"
                        />
                        

                    </div>


                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                      
                        <img 
                         className="rounded pl-3 mt-6 w-[250px] h-[200px]"
                         src={img_card}
                        alt="img"
                        />
                       

                    </div>


                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                        
                        <img 
                         className="rounded pl-3 mt-6 w-[250px] h-[200px]"
                         src={img_card}
                        alt="img"
                        />
                        

                    </div>


                    <div data-aos="fade-up" className="bg-white shadow-xl  text-center rounded-xl aos-init hover:bg-red">
                        
                        <img 
                         className="rounded pl-3 mt-6 w-[250px] h-[200px]"
                         src={img_card}
                        alt="img"
                        />
                        

                    </div>
                    

                </div>

            </div>
        </div>
    );

}

export default Choice;
