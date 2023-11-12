import { useState } from "react";
import Select, { components } from "react-select";
// import "./styles.css";
const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      width: state.selectProps.width,
    //   borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
      zIndex: '999'
    })
}
const SelectOptions = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,

  ...rest
}: any) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
    marginRight: '4px'

  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} defaultChecked={isSelected} />
      {children}
    </components.Option>
  );
};

// const allOptions = [
//   { value: "option 1", label: "option 1" },
//   { value: "option 2", label: "option 2" },
//   { value: "option 3", label: "option 3" },
//   { value: "option 4", label: "option 4" }
// ];

export default function SelectComponent({
    allOptions,
    getInitialDataBack = (e: any) => {
        return e
    }
}: any) {
  return (
    <div className="select__menu">
      <Select
        // defaultValue={[]}
        // isMulti
        styles={customStyles}
        className="select__menu--data"
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options: any) => {
          console.log('=== options ===', options)
          getInitialDataBack(options.value)
        }}
        options={allOptions}
        components={{
          Option: SelectOptions
        }}
      />
    </div>
  );
}
