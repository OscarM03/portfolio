import Button from "../components/Button"
import { Github, Linkedin, Send, Twitter } from "../utils"

const Hero = () => {
  return (
    <section className="container">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8  mt-40">
        <div className="text-center">
            <h1 className="text-5xl font-bold max-sm:text-4xl">Hello, I'm Oscar Mutwiri</h1>
            <h1 className="mt-1 text-secondary text-lg">Software Engineer based in Kenya</h1>
            <p className="mt-2 text-[16px]">I love developing user-friendly web applications with a focus on tackling new challenges and refining my skills</p>
            <div className="mt-3 flex items-center gap-4 justify-center">
                <Button label="View CV" icon={Send} href="https://drive.google.com/file/d/1bcKPsZfsYpBJiFNvOASxhpxDELX5IhbX/view?usp=sharing"/>
                <a href="https://www.linkedin.com/in/oscarm-906099281"><img src={Linkedin} alt="Linkedin" width={16}/></a>
                <a href="https://x.com/OscarM003"><img src={Twitter} alt="Twitter" width={16}/></a>
                <a href="https://github.com/OscarM03"><img src={Github} alt="Github" width={16}/></a>
            </div>
        </div>
        {/* <div className="overflow-hidden">
            <img src={Oscar} alt="Oscar" width={350} className="border-2 rounded-full "/>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
