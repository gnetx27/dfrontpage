import BannerParent from './Component/BannerParent';
import ChildLearn 	from './Component/ChildLearn';
import NextItme      from './Component/NextItme';

const Parent=()=>{
	return (
		<>
			<div className="bg-gray-100 mb-3">
				<BannerParent />
				<ChildLearn />
				<NextItme />
			</div>
		</>
	);
}

export default Parent;