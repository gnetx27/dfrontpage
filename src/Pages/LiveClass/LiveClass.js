import BannerLiveClass from './Component/BannerLiveClass';
import Choice from './Component/Choice';
import HowDo  from './Component/HowDo';


const LiveClass=()=>{
    return (
    <div className="bg-gray-100 mb-3">
        <BannerLiveClass />
        <HowDo />
        <Choice />
    </div>

    )
}

export default LiveClass;
