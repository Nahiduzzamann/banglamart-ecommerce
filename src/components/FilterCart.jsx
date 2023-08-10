import { useState } from "react";

const FilterCart = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mb-2">
      <div className="collapse bg-CardColor border border-BorderColor collapse-plus">
        <input type="checkbox" className="peer" />
        <div className="collapse-title  text-SubTextColor peer-checked:text-TextColor border border-CardColor peer-checked:border-b-BorderColor ">
          <h2>{title}</h2>
        </div>
        <div className="collapse-content bg-CardColor">
          <div className="flex flex-col max-h-[250px] overflow-y-auto">
            <div className="flex items-center mt-2">
              <div>
                <input
                  onClick={handleCheckBox}
                  type="checkbox"
                  checked={`${isChecked ? "checkbox" : ""}`}
                  className="checkbox checkbox-sm"
                />
              </div>
              <p
                className={`text-SubTextColor ml-2 ${
                  isChecked && "text-TextColor"
                }`}
              >
                Red
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCart;
