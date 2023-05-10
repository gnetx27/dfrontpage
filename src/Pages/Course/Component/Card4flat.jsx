import img_card from '../../util/img/cardflat.svg';


const Card4flat=()=>{
    return (
        <div className="grid md:grid-cols-4 gap-14 md:gap-5 p-10 mt-20" >
        <div data-aos="fade-up" className="bg-[#F3F4F6]  p-6 text-center rounded-xl aos-init">
           <img 
            className="rounded"
            src={img_card}
            alt="img"
            />
          <p class="font-bold pt-1">Flexible Pace</p>
          <p class="pt-1 font-serif">Dynamo classes are super flexible and easy to reschedul. Choose from a variety of class times that are most convenient</p>
          
        </div>

        <div data-aos="fade-down" className="bg-[#F3F4F6]  p-6 text-center rounded-xl aos-init">
           <img 
            className="rounded"
            src={img_card}
            alt="img"
            />
        <p class="font-bold pt-1">Live Instructors</p>
        <p class="pt-1 font-serif">Dynamo offers live instruction where students can interact with and ask question to their instructor.</p>
        
        </div>

        <div data-aos="fade-up" className="bg-[#F3F4F6]  p-6 text-center rounded-xl aos-init">
           <img 
            className="rounded"
            src={img_card}
            alt="img"
            />
          <p class="font-bold pt-1">Knowledge For Life</p>
          <p class="pt-1 font-serif">Coding bullds skills which are relevant not only to most jobs but to life! Problem solving and logic are the main tow</p>
          
        </div>
        
        <div data-aos="fade-down" className="bg-[#F3F4F6]  p-6 text-center rounded-xl aos-init">
           <img 
            className="rounded"
            src={img_card}
            alt="img"
            />

        <p class="font-bold pt-1">Real Projects</p>
        <p class="pt-1 font-serif">Kids build real project they can proudly show off to you their teachers and their firends.</p>
        
        </div>
        
      </div>
    );

}

export default Card4flat;