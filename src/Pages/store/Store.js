
import BannerStore  from "./Component/BannerStore";
import Interest from "./Component/Interest";
import LetestProduct from "./Component/LetestProduct";
import OurDesign from "./Component/OurDesign";
import Search from "./Component/Search";
import ShopBy from "./Component/ShopBy";
import Toys from "./Component/Toys";

const Store=()=>{
    return(
        <div className="bg-gray-100">
            <Search/>
            <BannerStore /> 
            <ShopBy />  
            <LetestProduct />
            <Interest />
            <LetestProduct />
            <OurDesign />
            <Toys />

        </div>

    )


}

export default Store;
