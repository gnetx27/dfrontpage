
import img_reco from '../../util/img/recognition.svg';
import img_award from '../../util/img/award.svg';
//import img_tap_bg from '../../util/img/tap/tap_bg.svg';

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
		label: "School Science Projects",
		value: "School Science Projects",
		desc: `It really matters and then like it really doesn't matter.
		What matters is the people who are sparked by it. And the people 
		who are like offended by it, it doesn't matter.`,
	  },
	  {
		label: "Undergraduate Project",
		value: "Undergraduate Project",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "Postgraduate Project",
		value: "Postgraduate Project",
		desc: `We're not always in the position that we want to be at.
		We're constantly growing. We're constantly making mistakes. We're
		constantly trying to express ourselves and actualize our dreams.`,
	  },
	  {
		label: "Professional",
		value: "Professional",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  }
	];
   
	return (
	  <Tabs value="html" className="bg-white my-10">
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
		<TabsBody className="bg-gray-100">
		  {data.map(({ value, desc }) => (
			<TabPanel key={value} value={value}>
			 
			</TabPanel>
		  ))}
		</TabsBody>
	  </Tabs>
	);
  }



function ConsultChoice(){


	return (
		<>
			<CenteredTabs />
			<div className="mb-40">
				
				<div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-5 p-3 justify-around">
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">IOT Projects</div>
					</div>
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">Automation & Dron Projects</div>
					</div>
					
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">Web Development & Cyber security Projects</div>
					</div>
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">Artfical Intelligence Projects</div>
					</div>
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">Mobile Application Project</div>
					</div>
					<div data-aos="fade-up" className="bg-white shadow-xl py-12 text-center rounded-xl aos-init hover:bg-red">
						<div className="bg-white">Bio-medical Projects</div>
					</div>
				</div>
				
			</div>
		</>
	);
}


export default ConsultChoice;
