import Button from "../components/Button";
import { useState } from "react";
import { Close, Menu, Send } from "../utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth > 1024) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const navList = [
    { name: "About", href: "#about" },
    { name: "My Projects", href: "#projects" },
  ];

  return (
    <section className="fixed">
      <div className="flex justify-between mx-28 max-lg:mx-16 max-sm:mx-6 py-3 items-center">
        <div>
          <h1 className="text-lg text-secondary font-extrabold">OscarM.</h1>
        </div>
        <div className="flex gap-10 justify-center items-center max-lg:hidden">
          {navList.map((navItem, index) => (
            <a href={navItem.href} key={index}>
              <h1 className="text-sm font-medium">{navItem.name}</h1>
            </a>
          ))}
          {/* <Button label="Contact Me" href="#contact" /> */}
        </div>
        {/* <div className="lg:hidden">
          <img
            src={isMenuOpen ? Close : Menu}
            alt={isMenuOpen ? "Close icon" : "Menu icon"}
            width={24}
            onClick={toggleMenu}
          />
        </div> */}
        {/* {isMenuOpen && (
          <div className="absolute top-12 left-0 right-0 bg-white shadow-lg py-5 mx-28 max-lg:mx-16 max-sm:mx-8 text-center lg:hidden">
            {navList.map((navItem, index) => (
              <a href={navItem.href} key={index}>
                <h1 className="text-sm font-medium mb-4">{navItem.name}</h1>
              </a>
            ))}
            <Button label="Contact Me" href="#contact" />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Header;
