import { allSkills } from "../constants";
import SkillCard from "../components/SkillCard";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-40 flex justify-center gap-10 max-lg:flex-col">
        <div className="w-[50%] max-lg:w-full">
          <h1 className="text-xl text-secondary font-medium max-lg:text-center">About Me</h1>
          <p className="mt-4 max-lg:text-center">
            My coding journey began with curiosity. I was always intrigued by
            how web pages function, enabling features like login systems,
            payments, and more. After some research, I discovered that web
            developers are behind the creation and functionality of websites.
            This sparked my desire to become one, leading me to pursue a
            software engineering course at ALX Africa. During my studies, I was
            captivated by how front-end technologies create seamless,
            user-friendly designs, and I became passionate about it. <br />{" "}
            <br /> However, my journey didn’t stop there. My interest in how the
            functionality behind those designs works, drove me to delve into
            back-end technologies. Now, I thrive on taking on new challenges
            that expand my understanding of web applications and enhance my
            skills as a developer.
          </p>
        </div>
        <div className="w-[40%] max-lg:w-full">
          <h1 className="text-xl text-secondary font-medium max-lg:text-center">
            My Skills
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-4 max-sm:grid-cols-3">
            {allSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
        {/* <div className="">
          <h1 className="text-xl text-secondary font-medium max-lg:text-center">My Skills</h1>
          <div className="flex gap-3 mt-4 max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:gap-8">
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:gap-8">
              <div className="flex flex-col gap-6 max-sm:flex-row max-sm:flex-wrap max-sm:justify-center">
                {skills1.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} width={30} />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6 max-sm:flex-row max-sm:flex-wrap max-sm:justify-center">
                {skills2.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} width={30} />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 max-sm:flex-col max-sm:gap-8">
              <div className="flex flex-col gap-6 max-sm:flex-row max-sm:flex-wrap max-sm:justify-center">
                {skills3.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} width={30} />
                    <p className=" font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6 max-sm:flex-row max-sm:flex-wrap max-sm:justify-center">
                {skills4.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} width={30} />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
