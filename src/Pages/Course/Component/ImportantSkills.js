import img_card_1 from '../../util/img/computer.svg';
import brain from '../../util/img/brain.svg';
import enhance from '../../util/img/enhance.svg';
import improved from '../../util/img/improved.svg';
//import Scientific from '../../util/img/Scientific.svg';

const ImportantSkills=()=>{
    return (
        <>
        <div data-aos="flip-down" className="text-center aos-init pb-5 ">
        <h2 className="text-2xl font-bold mb-4">Dynamo teaches kids important skills like</h2>
            
        <div className="grid md:grid-cols-5 gap-14 md:gap-5 pl-5 pr-5" >
        
          <div data-aos="fade-up" className="bg-[#F3F4F6] md:w-5/7 text-center rounded-xl aos-init">
            <img 
              className="rounded sm:"
              src={img_card_1}
              alt="img"
              />
            <p class="font-bold pt-1">Vital Computer Science Fundamentals</p>
            
          </div>

          <div data-aos="fade-down" className="bg-[#F3F4F6]  md:w-5/7 text-center rounded-xl aos-init">
            <img 
              className="rounded"
              src={brain}
              alt="img"
              />
          <p class="font-bold pt-1">Sharper Memory</p>
          
          </div>

          <div data-aos="fade-up" className="bg-[#F3F4F6] md:w-5/7  text-center rounded-xl aos-init">
            <img 
              className="rounded"
              src={enhance}
              alt="img"
              />
            <p class="font-bold pt-1">Enhanced Creativity</p>
            
          </div>
          
          <div data-aos="fade-down" className="bg-[#F3F4F6] md:w-5/7  text-center rounded-xl aos-init">
            <img 
              className="rounded"
              src={improved}
              alt="img"
              />

          <p class="font-bold pt-1">Improved Problem Solving</p>
          
          </div>

          <div data-aos="fade-up" className="bg-[#F3F4F6] md:w-5/7 content-center rounded-xl aos-init my-4 lg:pr-32">
            <img 
              className="rounded my-4 "
              src={enhance}
              alt="img"
              />
            <p class="font-bold pt-1">Scientific Knowledge</p>
            
          </div>
        </div>
      </div>
      </>
    )
}

export default ImportantSkills;
