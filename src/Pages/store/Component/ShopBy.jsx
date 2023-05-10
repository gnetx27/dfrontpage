import img_card_1 from '../../util/img/shop/card1.svg';
import img_card_2 from '../../util/img/shop/card2.svg';
import img_card_3 from '../../util/img/shop/card3.svg';
//import img_card_4 from '../../util/img/shop/card4.svg';

function ShopBy(){
    return (
        <div className="pt-10">
            <div className="text-center">
                <h3 className="text-3xl">Shop BY AGE</h3>
                <small> Boxes full of wonder for kids 14 & under</small>
            </div>


        <div className="flex md:grid-cols-4 gap-14 md:gap-5 mt-20 px-10 text-center ">  

          <div data-aos="fade-up" className="bg-gray-100  text-center  aos-init hover:bg-red">
             <img 
              className="rounded pl-3 mt-6"
              src={img_card_1}
              alt="img"
              />
          </div>

          <div data-aos="fade-up" className="bg-gray-100   text-center  aos-init hover:bg-red">
             <img 
              className="rounded pl-3 mt-6"
              src={img_card_2}
              alt="img"
              />
          </div>

          <div data-aos="fade-up" className="bg-gray-100   text-center  aos-init hover:bg-red">
             <img 
              className="rounded pl-3 mt-6"
              src={img_card_3}
              alt="img"
              />
          </div>




        </div>
        
        </div>

    )
}

export default ShopBy;
