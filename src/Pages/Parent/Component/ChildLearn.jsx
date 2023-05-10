import img_your_child from '../../util/img/yourchild.svg';

function ChildLearn(){
	return (
		<div className="bg-white mx-10 my-5 p-10  text-center rounded-xl content-center">
			<h1 className="text-center font-bold text-2xl">Your Child Wll Learn</h1>
			
			<img src={img_your_child} alt="img" className="content-center  h-[170px] mt-3"/>
		</div>
	)
}

export default ChildLearn;
