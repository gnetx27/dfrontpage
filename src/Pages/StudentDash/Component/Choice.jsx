import { Card } from "@material-tailwind/react"

import scrachjr1 from '../../util/img/stddashcard1.svg';
import scrachjr2 from '../../util/img/stddashcard2.svg';
import scrachjr3 from '../../util/img/stddashcard3.svg';

import img_card from '../../util/card/card.svg';

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
  } from "@material-tailwind/react";


function CenteredTabs() {
	const data = [
	  {
		label: "All Levels",
		value: "All Levels",
		desc: `It really matters and then like it really doesn't matter.
		What matters is the people who are sparked by it. And the people 
		who are like offended by it, it doesn't matter.`,
	  },
	  {
		label: "K - 5 Grades",
		value: "K - 5 Grades",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "6 - 8 Grades",
		value: "6 - 8 Grades",
		desc: `We're not always in the position that we want to be at.
		We're constantly growing. We're constantly making mistakes. We're
		constantly trying to express ourselves and actualize our dreams.`,
	  },
	  {
		label: "9 - 12 Grades",
		value: "9 - 12 Grades",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "Advance",
		value: "Advance",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  }
      
      

	];
   
	return (
	  <Tabs value="html" className="bg-white mb-10 bg-[#FFF0DE] py-5">
		<TabsHeader
		  className="bg-transparent "
		  
		  indicatorProps={{
			className: "bg-yellow-700/10 shadow-none text-blue-500",
			
		  }}
		>
		  {data.map(({ label, value }) => (
			<Tab key={value} value={value}>
			  {label}
			</Tab>
		  ))}
		  
		</TabsHeader>
		
	  </Tabs>
	);
  }


function Choice(){
    return (
        <div>
            <CenteredTabs />

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

                <div className="grid md:grid-cols-3 gap-14 md:gap-10 mt-20 p-3 flex justify-center">
                    


                    <div data-aos="fade-up" className="bg-white shadow-xl  rounded-xl aos-init">
                        <img 
                        className="w-full "
                        src={scrachjr1}
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
                        src={scrachjr2}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#FF8F05]">
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
                        src={scrachjr3}
                        alt="img"
                        />
                        
                        <div className="p-2 bg-[#2EA7FF]">
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

            </div>
        </div>
    );

}

export default Choice;
