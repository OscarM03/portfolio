import Button from "../components/Button";
import { Call, Gmail } from "../utils";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gp8nva",
        "template_oo74nmo",
        e.target,
        "Ju5RmaOGW3Qbu_Zf4"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="container">
      <div className="mx-28 max-lg:mx-16 max-sm:mx-8 p-6 mt-20">
        <div>
          <h1 className="text-xl text-secondary font-medium text-center mb-4">
            Contact Me
          </h1>
        </div>
        <div className="w-[50%] max-lg:w-[60%] max-md:w-full mx-auto">
          <div className="border-b border-black pb-8">
            <a href="mailto:oscarmutwiri03@gmail.com">
            <div className="flex justify-center items-center gap-4 text-gray-700 border-2 p-3 rounded-md shadow-lg transform transition-transform duration-200 hover:scale-105">
              <img src={Gmail} alt="Gmail Icon" width={24} />
              <p>oscarmutwiri03@gmail.com</p>
            </div>
            </a>
            <div className="flex justify-center items-center gap-4 text-gray-700 border-2 p-3 rounded-md shadow-lg transform transition-transform duration-200 hover:scale-105 mt-6">
              <img src={Call} alt="Call Icon" width={24} />
              <p>+254 112163160</p>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={sendEmail}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border py-3 px-2 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border py-3 px-2 rounded-md"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="border py-6 px-2 rounded-md mt-8 w-full"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit" 
                  className="rounded-full px-3 py-2 bg-secondary text-white text-sm font-medium flex items-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
