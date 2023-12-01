import { useState } from "react";
import "./styles.scss";
import ArrowDownIcon from "../icons/arrow-down";

interface ISelectProps {
  options: any[];
  selected: any;
  handleChangeSelect: (option: any) => void;
}

const Select: React.FC<ISelectProps> = ({
  options,
  selected,
  handleChangeSelect,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleChangeOption = (option: any) => {
    setOpenOptions(false);
    handleChangeSelect(option);
  };

  return (
    <div className="select">
      <button
        type="button"
        className={`select__container ${
          openOptions ? "select__container--active" : ""
        }`}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <p>{selected.name}</p>
        <div>
          <ArrowDownIcon />
        </div>
      </button>
      <div
        className={`select-options ${
          openOptions ? "select-options--active" : ""
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`select-options__option ${
              selected.name === option.name
                ? "select-options__option--active"
                : ""
            }`}
            onClick={() => handleChangeOption(option)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
