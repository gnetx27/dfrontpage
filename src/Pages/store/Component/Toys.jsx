import img_toys1 from '../../util/img/toys.svg';
import img_toys2 from '../../util/img/toys2.svg';
import img_toys3 from '../../util/img/toys3.svg';
import img_toys4 from '../../util/img/toys4.svg';


function Toys(){
    return (
        <div>
            
            <h1 className="text-center font-bold m-4 text-2xl">Toys Trending Videos</h1>
            <div className="flex gap-20 p-10">
                <div className="w-[50%]">
                    <h1 className="text-center">1</h1>
                    <img src={img_toys1}  />
                </div>
                
                <div className="w-[50%]">
                    <h1 className="text-center">1</h1>
                    <img src={img_toys2} />
                </div>
                
            </div>

            <h1 className="text-center font-bold m-4 text-2xl">Discount For</h1>
            <div className="flex bg-[#D1EFFC] p-10">
                <div className="w-[50%]">
                    <h1 className="text-center">Retailers</h1>
                    <img src={img_toys3} />
                </div>
                
                <div className="w-[50%]">
                    <h1 className="text-center">Schools</h1>
                    <img src={img_toys4} />
                </div>
                
            </div>
            


        </div>
    )
}


export default Toys;