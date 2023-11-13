import { FormControl, FormErrorMessage, GridItem, InputGroup, Text } from "@chakra-ui/react";

// import { computedInputProps } from "./FormRenderer";
import InputGroupComp from "./InputGroup";

const InputRenderer = ({
  fullWidth,
  double,
  triple,
  formik,
  googleMapsCheck,
  ...rest
}: any) => {
  return (
    googleMapsCheck ? <> 
      {rest.type !== "checkbox" && rest.title && <Text>{rest.title}</Text>}

      <FormControl
        isInvalid={
          !!(
            (formik?.errors as any)[rest.name] &&
            (formik?.touched as any)[rest.name]
          )
        }
      >
        <InputGroup size="lg">
          <InputGroupComp formik={formik} {...rest} />
        </InputGroup>

        <FormErrorMessage>{(formik?.errors as any)[rest.name]}</FormErrorMessage>
      </FormControl>
      
      </>
      : <GridItem
      colSpan={{
        base: 12,
        md: fullWidth || triple ? 12 : 6,
        lg: fullWidth ? 12 : triple ? 9 : double ? 6 : 3,
      }}
      mb={5}
    >
      {rest.type !== "checkbox" && rest.title && <Text>{rest.title}</Text>}

      <FormControl
        isInvalid={
          !!(
            (formik?.errors as any)[rest.name] &&
            (formik?.touched as any)[rest.name]
          )
        }
      >
        <InputGroup size="lg">
          <InputGroupComp formik={formik} {...rest} />
        </InputGroup>

        <FormErrorMessage>{(formik?.errors as any)[rest.name]}</FormErrorMessage>
      </FormControl>
    </GridItem>
  );
};

export default InputRenderer;
