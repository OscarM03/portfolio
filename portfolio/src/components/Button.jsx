const Button = ({ label, icon, href, type = "button" }) => {
  return (
    <a href={href} className="inline-block">
      <div
        type={type}
        className="rounded-full px-4 py-2 bg-secondary text-white text-sm font-medium flex items-center justify-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
      >
        <h1 className="">{label}</h1>
        {icon && <img src={icon} alt="icon" width={17} className="ml-2" />}
      </div>
    </a>
  );
};

export default Button;
