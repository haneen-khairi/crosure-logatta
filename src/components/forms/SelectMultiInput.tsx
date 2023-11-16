import { Checkbox, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";

import { computedInputProps } from "./FormRenderer";
// import { useState } from "react";
import Select from "react-select";
// import "./styles.css";
const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
    //   borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
      zIndex: 999
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: '12px', // Adjust this value to change the font size
      cursor: 'pointer'
      // other styles you want to apply to the options
    }),
}

const SelectMultiInput = ({ onChange, ...props }: computedInputProps) => {
  return (
    <Popover >
      <PopoverTrigger >
        <Input
          colorScheme="primary"
          size="lg"
          {...props}
          borderRadius={'24px'}
          value={props.value
            .map(
              (v: string | number | boolean) =>
                props.options?.find((o) => o.value == v)?.label
            )
            .join(", ")}
        />
      </PopoverTrigger>

      <PopoverContent zIndex={99999999} className="PopoverContent">
        <PopoverBody >
          {props.options?.map(({ value, label }, i) => (
            <Checkbox
              colorScheme="primary"
              size="lg"
              onChange={() =>
                onChange(
                  props.name,
                  props.value?.includes(value)
                    ? props.value?.filter(
                        (v: string | boolean | number) => v !== value
                      )
                    : [...props.value, value]
                )
              }
              {...props}
              checked={props.value.includes(value)}
              width="100%"
              my={3}
              key={i}
            >
              {label}
            </Checkbox>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  //   <div className="select__menu">
  //   <Select
  //   // id={id}
  //   //   defaultValue={allOptions[defaultValue]}
  //     isMulti
  //     styles={customStyles}
  //     className="select__menu--data"
  //     // // closeMenuOnSelect={false}
  //     // // hideSelectedOptions={false}
  //     onChange={(option: any) => {
  //       // onChange(
  //       //   props.name,
  //       //   props.value?.includes(option.value)
  //       //     ? props.value?.filter(
  //       //         (v: string | boolean | number) => v !== option.value
  //       //       )
  //       //     : [...props.value, option.value]
  //       // )
  //       console.log('=== options ===', option , props)
  //       console.log('=== props name ===' , props.name);
  //       console.log('=== props value ===' , props.value?.includes(option.value)
  //                   ? props.value?.filter(
  //                       (v: string | boolean | number) => v !== option.value
  //                     )
  //                   : [...props.value, option.value]
  //               )
  //       // getDataBack(option)
  //     }}
  //     options={props.options}
  //     // components={{
  //     //   Option: SelectOptions
  //     // }}
  //   />
  // </div>
  );
};

export default SelectMultiInput;
