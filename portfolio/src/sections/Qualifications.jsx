import Button from "../components/Button"
import { Alx, Menu } from "../utils"

const Qualifications = () => {
  return (
    <section className="container">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-20 flex max-lg:flex-col max-lg:items-center">
        <div className="w-[50%] max-lg:w-full">
            <h1 className="text-xl text-secondary font-medium max-lg:text-center">Qualification</h1>
            <div className="flex items-center gap-8 mt-10 justify-center">
                <div className="">
                    <img src={Alx} alt="Menu Icon" width={70} className="border rounded-lg shadow-lg"/>
                </div>
                <div className="">
                    <h1 className="text-lg font-medium">African Leadership Experience</h1>
                    <h1>Software Engineering</h1>
                    <p className="text-gray-500 text-sm ">Jul 2023 - Aug 2024</p>
                    <div className="flex gap-4 mt-2">
                        <Button label="Certificate"/>
                        <Button label="Transcript"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[50%] max-lg:w-full lg:border-l-2 max-lg:mt-10">
            <h1 className="text-xl text-secondary font-medium text-center">Services</h1>
            <div className="flex flex-col items-center mt-8">
                <div className="flex gap-4">
                    <img src={Menu} alt="Menu Icon" width={24}/>
                    <h1>Front-End Development</h1>
                </div>
                <div className="flex gap-4 mt-2">
                    <img src={Menu} alt="Menu Icon" width={24}/>
                    <h1>Back-End Development</h1>
                </div>
                <div className="flex gap-4 mt-2">
                    <img src={Menu} alt="Menu Icon" width={24}/>
                    <h1>Full-Stack Development</h1>
                </div>
                <div className="flex gap-4 mt-2">
                    <img src={Menu} alt="Menu Icon" width={24}/>
                    <h1>API Design & Integration</h1>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
