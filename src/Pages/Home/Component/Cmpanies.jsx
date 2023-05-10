import airbnb from '../../util/img/company/airbnb.svg';
import amazon from '../../util/img/company/amazon.svg';
import facebook from '../../util/img/company/facebook.svg';
import google from '../../util/img/company/google.svg';
import mieducation from '../../util/img/company/ministoryeducation.svg';


function Cmpanies(){
    return (
	
	<div class="max-w-4xl mx-auto">
			<h1 class="text-center mb-3 text-gray-400 font-medium">Trusted by 5,000+ Companies Worldwide</h1>
			<div class="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
				<img class="h-9" src={airbnb} />
				<img class="h-9" src={amazon} />
				<img class="h-9" src={facebook} />
				<img class="h-9 transform translate-y-2" src="img/company/amazon.svg" />
				<img class="h-9" src={google}/>
				<img class="h-9" src={mieducation} />
			</div>
		</div>
		
    );

}
export default Cmpanies;
