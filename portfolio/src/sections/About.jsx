
const About = ({ close }) => {
    return (
        <section className="flex justify-center items-center bg-black/60 fixed inset-0 z-50 mt-16 mb-8">
            <div className="flex flex-col items-center border rounded-lg relative bg-dark-bg w-[90%] md:w-[60%] lg:w-[50%] border-gray-400">
                <div className="w-full py-4 rounded-t-lg text-center font-bold border-b border-gray-400">
                    <h2 className="text-white text-2xl ">About Me</h2>
                </div>
                <p className="mt-4 max-lg:text-center text-white p-2">
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
        // <section id="about" className="container">
        //   <div className="mx-28 max-lg:mx-16 max-sm:mx-8 mt-40 flex justify-center gap-10 max-lg:flex-col">
        //     <div className="w-[50%] max-lg:w-full">
        //       <h1 className="text-xl text-secondary font-medium max-lg:text-center">
        //         About Me
        //       </h1>
        //       <p className="mt-4 max-lg:text-center">
        //         My coding journey began with curiosity. I was always intrigued by
        //         how web pages function, enabling features like login systems,
        //         payments, and more. After some research, I discovered that web
        //         developers are behind the creation and functionality of websites.
        //         This sparked my desire to become one, leading me to pursue a
        //         software engineering course at ALX Africa. During my studies, I was
        //         captivated by how front-end technologies create seamless,
        //         user-friendly designs, and I became passionate about it. <br />{" "}
        //         <br /> However, my journey didn’t stop there. My interest in how the
        //         functionality behind those designs works, drove me to delve into
        //         back-end technologies. Now, I thrive on taking on new challenges
        //         that expand my understanding of web applications and enhance my
        //         skills as a developer.
        //       </p>
        //     </div>
        //     <div className="w-[40%] max-lg:w-full">
        //       <h1 className="text-xl text-secondary font-medium max-lg:text-center">
        //         My Skills
        //       </h1>
        //       <div className="grid grid-cols-4 gap-4 mt-4 max-sm:grid-cols-3">
        //         {allSkills.map((skill) => (
        //           <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        //         ))}
        //       </div>
        //     </div>
        //   </div>
        // </section>
    );
};

export default About;
