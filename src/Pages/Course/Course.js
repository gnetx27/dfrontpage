import BannerCourse from './Component/BannerCourse';

//component 
import Vide  from './Component/Video';
import Card4 from './Component/Card4';
import Why   from './Component/Why';
import Card4flat from './Component/Card4flat';

import Card3FeatureCourse from './Component/Card3FeatureCourse';
import Recognition from './Component/Recognition';
import ImportantSkills from './Component/ImportantSkills';





const Course=()=>{
	return (
		<>
			<div className="bg-gray-100">
				
				<BannerCourse />
				
				<Vide />
				<Card4 />
				<Why />
				<Card4flat />
				
				<Card3FeatureCourse />
				<Recognition />
				<ImportantSkills />
				
			</div>
		</>
	);
}
export default Course;
