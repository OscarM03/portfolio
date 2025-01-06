const Button = ({ label, open, icon, type = "button" }) => {
  return (
      <div
        type={type}
        className="rounded-full px-4 py-2 bg-secondary text-white text-sm font-medium flex items-center justify-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
        onClick={open}
      >
        <h1 className="">{label}</h1>
        {icon && <img src={icon} alt="icon" width={17} className="ml-2" />}
      </div>
  );
};

export default Button;
