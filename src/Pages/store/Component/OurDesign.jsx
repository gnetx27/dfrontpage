import img_card from '../../util/img/ourdesign.svg';


function OurDesign(){
    return (    
        <div className="bg-[#08B0F8] flex py-10">
            <div class="w-[50%]flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
			
                
                <h3 className=" text-center text-5xl font-bold">Our Design Approach</h3>
                <p className="text-center text-white">Children who solve global problems</p>
                <br/>
                <p className=" text-center text-white">Every kit is designed and researched by experts and goes through 100+ hours of testing by young STEM ninjas & parents!</p>
                
            </div>
            <div className="w-[50%]">
                <img src={img_card} />
            </div>
            

        </div>

    );
}


export default OurDesign;
