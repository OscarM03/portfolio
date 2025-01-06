import { useEffect, useRef } from "react";
import { additionalTools, backEndSkills, frontEndSkills } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const additionaltoolsRef = useRef(null);

    useEffect(() => {
        const sections = [frontendRef, backendRef, additionaltoolsRef];

        sections.forEach((section, index) => {
            gsap.fromTo(
                section.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: section.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="flex justify-center items-center bg-black/60 fixed inset-0 z-50 mt-16 mb-8">
            <div className="flex flex-col items-center border rounded-lg relative bg-dark-bg w-[83%] h-full border-gray-400">
                <div className="w-full py-4 rounded-t-lg text-center font-bold border-b border-gray-400">
                    <h2 className="text-white text-2xl ">My Projects</h2>
                </div>
                <div className="mt-8">
              <div ref={frontendRef} className="flex items-center mt-16 max-xl:flex-col">
                <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Front-End Development</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                  {frontEndSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={skill.icon} alt={skill.name} width={35} />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div ref={backendRef} className="flex items-center mt-16 max-xl:flex-col">
                <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Back-End Development</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                  {backEndSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={skill.icon} alt={skill.name} width={35} />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div ref={additionaltoolsRef} className="flex items-center mt-16 max-xl:flex-col">
                <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Additional Tools</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                  {additionalTools.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={skill.icon} alt={skill.name} width={35} />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
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
        // <section className="container">
        //   <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-20">
        //     <div>
        //       <h1 className="text-xl text-secondary font-medium max-xl:text-center">Skills</h1>
        //     </div>
        //     <div className="mt-8">
        //       <div ref={frontendRef} className="flex items-center mt-16 max-xl:flex-col">
        //         <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Front-End Development</h1>
        //         <div className="flex flex-wrap gap-6 justify-center">
        //           {frontEndSkills.map((skill, index) => (
        //             <div key={index} className="flex items-center gap-2">
        //               <img src={skill.icon} alt={skill.name} width={35} />
        //               <p className="text-sm font-medium">{skill.name}</p>
        //             </div>
        //           ))}
        //         </div>
        //       </div>
        //       <div ref={backendRef} className="flex items-center mt-16 max-xl:flex-col">
        //         <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Back-End Development</h1>
        //         <div className="flex flex-wrap gap-6 justify-center">
        //           {backEndSkills.map((skill, index) => (
        //             <div key={index} className="flex items-center gap-2">
        //               <img src={skill.icon} alt={skill.name} width={35} />
        //               <p className="text-sm font-medium">{skill.name}</p>
        //             </div>
        //           ))}
        //         </div>
        //       </div>
        //       <div ref={additionaltoolsRef} className="flex items-center mt-16 max-xl:flex-col">
        //         <h1 className="text-lg font-bold w-[15%] max-xl:w-full max-xl:text-center max-xl:mb-4">Additional Tools</h1>
        //         <div className="flex flex-wrap gap-6 justify-center">
        //           {additionalTools.map((skill, index) => (
        //             <div key={index} className="flex items-center gap-2">
        //               <img src={skill.icon} alt={skill.name} width={35} />
        //               <p className="text-sm font-medium">{skill.name}</p>
        //             </div>
        //           ))}
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
    );
};

export default Skills;
