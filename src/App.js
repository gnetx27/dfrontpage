import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'alpinejs';
import AOS from 'aos';
import "aos/dist/aos.css";
//import style lib
import './Pages/util/css_custome/skilline.css';
import './index.css';
import './App.css';

import Header from './Pages/Header/Header';
import Fotter from './Pages/Fotter/Fotter';
import Home   from './Pages/Home/Home';
import Course from './Pages/Course/Course';
import Parent from './Pages/Parent/Parent';
import School from './Pages/School/School';
import Consultant from './Pages/Consultant/Consultant';
import Tutor from './Pages/Tutor/Tutor';
import LiveClass from './Pages/LiveClass/LiveClass';
import Store from "./Pages/store/Store";


import img_404 from './Pages/util/img/404-template.png';
import MyRoute from "./Pages/MyRoute";
import StudentDash from "./Pages/StudentDash/StudentDash";
import StoreDetail from "./Pages/StoreDetail/StoryDetail";
import ParentCourseGrade1 from "./Pages/ParentCourseGrade1/ParentCourseGrade1";
import SchoolCourseK8 from "./Pages/SchoolCourseK8/SchoolCourseK8";
import SchoolCourseK2 from "./Pages/SchoolCourseK2/SchoolCourseK2";
import SchoolCourseElementary from "./Pages/SchoolCourseElementary/SchoolCourseElementary.jsx";
import SchoolCourseMiddleSchool from "./Pages/SchoolCourseMiddleSchool/SchoolCourseMiddleSchool";
import SchoolCourseFree from "./Pages/SchoolCourseFree/SchoolCourseFree";
import SchoolCourseHighSchool from "./Pages/SchoolCourseHighSchool/SchoolCourseHighSchool";

// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

//209640

function App() {
	useEffect(() => {
		AOS.init({ duration : 1000});
		AOS.refresh();
	}, []);
  
	return (
			<Router>
				<Header />
					<div class="antialiased" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0"> 
			
					<Switch>
					  <Route exact path="/" component={Home} />
					  <Route exact path="/course" component={Course} />
					  <Route exact path="/parent" component={Parent} />
					  <Route exact path="/school" component={School} />
					  <Route exact path="/consultant" component={Consultant} />
					  <Route exact path="/tutoring" component={Tutor} />
					  <Route exact path="/liveclass" component={LiveClass} />
					  <Route exact path="/store" component={Store} />
					 
					  <Route exact path="/studentdash" component={StudentDash} />
					  <Route exact path="/storedetail" component={StoreDetail} />
					  <Route exact path="/parentcoursegrade1" component={ParentCourseGrade1} />
					  <Route exact path="/schoolcoursek8" component={SchoolCourseK8} />
					  <Route exact path="/schoolcoursek2" component={SchoolCourseK2} />
					  <Route exact path="/schoolcourseelementary" component={SchoolCourseElementary} />
					  <Route exact path="/schoolcoursemiddleschool" component={SchoolCourseMiddleSchool} />
					  <Route exact path="/schoolcoursefree" component={SchoolCourseFree} />
					  <Route exact path="/schoolcoursehighschool" component={SchoolCourseHighSchool} />
					  
					  

					  
					  
					  
					  <Route exact path="/route" component={MyRoute} />
					  
					  
					  
					  <Route path="/*"><img src={img_404} alt="404"/></Route>
					</Switch>
					</div>
					
				<Fotter />
			</Router>

	);
}

export default App;
