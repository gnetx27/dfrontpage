import BannerHome from './../Banner/BannerHome';
import BannerHomeImg from './../Banner/BannerHomeImg';
import Fotter from '../Fotter/Fotter';


//page components
import HomeBody from './Component/HomeBody';
import MovieCard from './Component/MovieCard';
import Card1 from './Tmp/Card1';
import WhoWe from './Tmp/WhoWe';
import WimgLtext from './Tmp/WimgLtext';
import BodyTmp from './Tmp/BodyTmp';

const Home=()=>{
	return (
		<>
			{ /*<BannerHomeImg />
			<WhoWe />
			<WimgLtext />
			 <MovieCard /> 
			
			<BodyTmp />*/ }
			<BannerHome />
			<HomeBody />
			
		</>
	)
}


export default Home;
