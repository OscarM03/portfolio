import Button from "../components/Button"
import { Project1 } from "../utils"


const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-20">
        <h1 className="text-xl text-secondary font-medium max-lg:text-center">My Projects</h1>
        <div className="mt-10 grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            <div className="border-2 p-3 flex flex-col items-center text-center rounded-lg shadow-lg relative">
                <img src={Project1} alt="Project 1" width={200} className="mt-1"/>
                <h1 className="text-lg font-semibold mt-2 text-secondary">Xiaomi Store Centre</h1>
                <p className="mt-2">An e-commerce website for selling Xiaomi related products</p>
                <h1 className="border-2 px-3 py-1 rounded-full shadow-lg mt-2 text-sm font-bold">React Js + Tailwind CSS</h1>
                <div className="flex gap-6 mt-3">
                    <a href="https://store-centre.vercel.app/" target="_blank"><Button label="Live Demo" /></a>
                    <a href="/xiaomistorecentre"><Button label="Read More"/></a>
                </div>
                    <p className="absolute -top-3 right-6 border-2 px-3  rounded-full shadow-lg text-sm font-bold bg-white">Frontend</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
