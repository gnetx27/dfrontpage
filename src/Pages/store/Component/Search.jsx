
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
  } from "@material-tailwind/react";

  import img_cart from '../../util/img/cart.svg';
function CenteredTabs() {
	const data = [
	  {
		label: "Electronics component",
		value: "Electronics component",
		desc: `It really matters and then like it really doesn't matter.
		What matters is the people who are sparked by it. And the people 
		who are like offended by it, it doesn't matter.`,
	  },
	  {
		label: "STEM Kits",
		value: "STEM Kits",
		desc: `Because it's about motivating the doers. Because I'm here
		to follow my dreams and inspire other people to follow their dreams, too.`,
	  },
	  {
		label: "Books",
		value: "Books",
		desc: `We're not always in the position that we want to be at.
		We're constantly growing. We're constantly making mistakes. We're
		constantly trying to express ourselves and actualize our dreams.`,
	  },
	  {
		label: "4-7 Age",
		value: "4-7 Age",
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
		label: "13+ ages",
		value: "13+ ages",
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


function Search(){
    return (
        <>
            <div className="flex w-full  py-10 px-20" >
                <div className="w-[50%] text-center">
                    <span className="mr-5">Search</span><input />
                </div>
                
  <div className="w-[50%]  flex">
					  <b className="absolute right-0 px-20" >shoping cart</b>
					  <img className="absolute right-0 w[30px] h-[25px] px-5" src={img_cart} />
				  </div>
            </div>
            <CenteredTabs />
        </>
    );
}

export default   Search;
