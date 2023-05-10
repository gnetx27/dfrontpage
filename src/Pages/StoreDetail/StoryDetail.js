import Choice from './Component/Choice';
import NextPrevious from './Component/NextPrevious';
import Search from './Component/Search';

const StoreDetail=()=>{
    return(

        <div className="bg-gray-100 mb-3">
            <Search />
            <Choice />
            <NextPrevious />
        </div>
    )
}

export default StoreDetail;
