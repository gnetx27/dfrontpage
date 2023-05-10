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
		label: "Art & Creativity",
		value: "Art & Creativity",
		desc: `It really matters and then like it really doesn't matter.
		What matters is the people who are sparked by it. And the people 
		who are like offended by it, it doesn't matter.`,
	  },
	  {
		label: "Motion & Mechanics",
		value: "Motion & Mechanics",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "3D Puzzles",
		value: "3D Puzzles",
		desc: `We're not always in the position that we want to be at.
		We're constantly growing. We're constantly making mistakes. We're
		constantly trying to express ourselves and actualize our dreams.`,
	  },
	  {
		label: "Science",
		value: "Science",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "8-12 age",
		value: "8-12 age",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  }
      ,
	  {
		label: "Technology",
		value: "Technology",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  }
      
      

	];
   
	return (
	  <Tabs value="html" className="bg-white my-10 bg-[#FFF0DE] py-5">
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

function Interest(){
    return (
        <>
           <div className="text-center mb-5">
                <h3 className="h1 text-4xl ">INTEREST CATEGORIES</h3>
                <small >Discover a playground of innovation, creativity, and sheer joy</small>
           </div>
           <CenteredTabs />
        </>
    );
}

export default Interest;