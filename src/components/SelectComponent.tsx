// import { useState } from "react";
import Select from "react-select";
// import "./styles.css";
const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      width: state.selectProps.width,
    //   borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
      zIndex: '999'
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: '12px', // Adjust this value to change the font size
      cursor: 'pointer'
      // other styles you want to apply to the options
    }),
}


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
        // components={{
        //   Option: SelectOptions
        // }}
      />
    </div>
  );
}
