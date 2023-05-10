import codingkidsteens from '../../util/img/22.png';

function WhoWe(){
    return (
        <>
            <section className="bg-gray-100 rounded-xl aos-init pb-3 " >
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-gray-900 " data-te-animation-start="onHover" >
                    Who we are
                </h2>
                <p className="mb-4 text-black">
                Dynamo is an education technology company that provides STEM-based education solutions and services to foster practical problem-solving skills among students and professionals in Ethiopia.
                </p>
                <p className="text-black">
                    We are strategists, designers and developers. Innovators and problem
                    solvers. Small enough to be simple and quick.
                </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                    className="w-full rounded-lg"
                    src={codingkidsteens}
                    alt="office content 1"
                />
                <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src={codingkidsteens}
                    alt="office content 2"
                />
                592x822
                </div>
                
            </div>
            <div className="text-center px-5">
                At Dynamo Center for Technology, we are a team of passionate educators and professionals 
            dedicated to transforming the way education is delivered in Ethiopia. We believe that every 
            student deserves access to quality education and should be equipped with the skills necessary 
            to solve real-world problems. Our team is made up of experienced educators, technologists, 
            researchers, and innovators who are committed to making a positive impact on the education 
            landscape in Ethiopia. We are driven by our mission to provide innovative educational solutions 
            that empower students to excel and succeed in an ever-changing world.
                </div>
            </section>
        </>

    )
}

export default WhoWe;
