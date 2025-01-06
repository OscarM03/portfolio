import { useState } from "react"
import Button from "../components/Button"
import { Github, Linkedin, Send, Twitter } from "../utils"
import Projects from "./Projects";
import About from "./About";
import SkillsGrid from "./SkillsGrid";
import Form from "./Form";

const Hero = () => {
  const [isMyProjectsOpen, setIsMyProjectOpen] = useState(false);
  const [isMyAboutOpen, setIsMyAboutOpen] = useState(false);
  const [isMySkillsOpen, setIsMySkillsOpen] = useState(false);
  const [isContactPageOpen, setIsContactPageOpen] = useState(false);

  return (
    <section className="container h-[100vh] flex justify-center items-center">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8 ">
        <div className="text-center">
            <h1 className="text-5xl font-bold max-sm:text-4xl text-white">Hello, I'm Oscar Mutwiri</h1>
            <h1 className="mt-1 text-secondary text-lg font-bold">Web Developer based in Kenya</h1>
            <p className="mt-2 text-[16px] text-gray-300">I love developing user-friendly web applications with a focus on tackling new challenges and refining my skills</p>
            <div className="mt-3 flex items-center gap-4 justify-center">
                
                <a href="https://www.linkedin.com/in/oscarm-906099281"><img src={Linkedin} alt="Linkedin" width={16}/></a>
                <a href="https://x.com/OscarM003"><img src={Twitter} alt="Twitter" width={16}/></a>
                <a href="https://github.com/OscarM03"><img src={Github} alt="Github" width={16}/></a>
            </div>
            <div className="flex sm:space-x-4 justify-center max-sm:flex-col max-sm:space-y-4 mt-3">
            <Button label="About Me" open={() => setIsMyAboutOpen(true)}/>
            <Button label="My Skills" open={() => setIsMySkillsOpen(true)}/>
            <Button label="My Projects" open={() => setIsMyProjectOpen(true)} />
            <Button label="Contact Me" open={() => setIsContactPageOpen(true)}/>
            </div>
        </div>
      </div>
      {isMyProjectsOpen && (
        <Projects close={() => setIsMyProjectOpen(false)}/>
      )}

      {isMyAboutOpen && (
        <About close={() => setIsMyAboutOpen(false)}/>
      )}

      {isMySkillsOpen && (
        <SkillsGrid close={() => setIsMySkillsOpen(false)}/>
      )}

      {isContactPageOpen && (
        <Form close={() => setIsContactPageOpen(false)}/>
      )}
    </section>
  )
}

export default Hero
