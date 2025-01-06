import Button from "../components/Button"
import { projects } from "../constants"
import { Project1 } from "../utils"


const Projects = ({close}) => {
    return (
        <section className="flex justify-center items-center bg-black/60 fixed inset-0 z-50 mt-16 mb-8">
            <div className="flex flex-col items-center border rounded-lg relative bg-dark-bg w-[90%] md:w-[86%] lg:w-[80%] h-full border-gray-400">
                <div className="w-full py-4 rounded-t-lg text-center font-bold border-b border-gray-400">
                    <h2 className="text-white text-2xl ">My Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-6 overflow-y-scroll remove-scrollbar">
                    {projects.map((project) => (
                        <div key={project.name} className="border-2 p-3 flex flex-col items-center text-center rounded-lg shadow-lg relative border-gray-700">
                            <img src={project.image} alt="Project 1" width={200} className="mt-1" />
                            <h1 className="text-lg font-semibold mt-2 text-secondary">{project.name}</h1>
                            <p className="mt-2 text-white">{project.description}</p>
                            <div className="flex gap-6 mt-3">
                                <a href={project.demoLink} target="_blank"><Button label="View Demo" /></a>
                                <a href={project.codeLink}><Button label="View Code" /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute right-1 top-1" onClick={close}>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </section>
        // <section id="projects" className="container">
        //   <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-20">
        //     <h1 className="text-xl text-secondary font-medium max-lg:text-center">My Projects</h1>
        //     <div className="mt-10 grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        //         <div className="border-2 p-3 flex flex-col items-center text-center rounded-lg shadow-lg relative">
        //             <img src={Project1} alt="Project 1" width={200} className="mt-1"/>
        //             <h1 className="text-lg font-semibold mt-2 text-secondary">Xiaomi Store Centre</h1>
        //             <p className="mt-2">An e-commerce website for selling Xiaomi related products</p>
        //             <h1 className="border-2 px-3 py-1 rounded-full shadow-lg mt-2 text-sm font-bold">React Js + Tailwind CSS</h1>
        //             <div className="flex gap-6 mt-3">
        //                 <a href="https://store-centre.vercel.app/" target="_blank"><Button label="Live Demo" /></a>
        //                 <a href="/xiaomistorecentre"><Button label="Read More"/></a>
        //             </div>
        //                 <p className="absolute -top-3 right-6 border-2 px-3  rounded-full shadow-lg text-sm font-bold bg-white">Frontend</p>
        //         </div>
        //     </div>
        //   </div>
        // </section>
    )
}

export default Projects
