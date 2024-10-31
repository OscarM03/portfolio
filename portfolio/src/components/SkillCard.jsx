const SkillCard = ({ name, icon }) => {
    return (
      <div className="flex flex-col items-center justify-center p-1 gap-1 border border-gray-200 rounded-lg shadow-md w-25 h-16 bg-white transform transition-transform duration-200 hover:scale-105">
        <img src={icon} alt={`${name} icon`} width={25}/>
  
        <div className="relative w-full overflow-hidden h-6 text-center text-gray-700 text-sm">
          <span className="inline-block whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>
    );
  };
  
  export default SkillCard;
  