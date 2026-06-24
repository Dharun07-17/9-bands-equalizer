import "./Slider.css";

const Slider = ({ label, value, onChange, className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center h-full gap-5 ${className}`}>

      <span className="text-white text-xl mt-0 w-8 text-center">
         {(value)}
      </span>

      <div className="h- flex items-center justify-center">
        <input
          type="range"
          min="-10"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider"
        />
      </div>

      <span className="text-lg  text-white flex justify-center items-center">
        {label}
      </span>

    </div>
  );
};

export default Slider;