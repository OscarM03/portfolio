import { allSkills } from "../constants"
import SkillCard from "../components/SkillCard"

const SkillsGrid = ({close}) => {
    return (
        <section className="flex justify-center items-center bg-black/60 fixed inset-0 z-50 mt-16 mb-8">
            <div className="flex flex-col items-center border rounded-lg relative bg-dark-bg w-[90%] md:w-[60%] lg:w-[50%] border-gray-400">
                <div className="w-full py-4 rounded-t-lg text-center font-bold border-b border-gray-400">
                    <h2 className="text-white text-2xl ">My Skills</h2>
                </div>
                <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-4 p-4 w-full">
                    {allSkills.map((skill) => (
                        <div className="flex flex-col items-center justify-center p-1 gap-1 border border-gray-200 rounded-lg shadow-md w-25 h-16 bg-white transform transition-transform duration-200 hover:scale-105" key={skill.name}>
                        <img src={skill.icon} alt={`${skill.name} icon`} width={25}/>
                  
                        <div className="relative w-full overflow-hidden h-6 text-center text-gray-700 text-sm">
                          <span className="inline-block whitespace-nowrap">
                            {skill.name}
                          </span>
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
        </section >

    )
}

export default SkillsGrid
