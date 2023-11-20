// import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";

import { locationProps } from ".";
import CardComp from "../../../components/cards";
import FormRenderer from "../../../components/forms/FormRenderer";
import GoogleMapComp from "../../../components/googleMap";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

interface props {
  withoutMap?: boolean;
  data?: locationProps[];
  setProperty?: any;
  onSubmit?: any;
  coordinates?: number[];
}

const  ResultsSearchBox = ({
  withoutMap,
  data,
  setProperty,
  onSubmit,
  coordinates
}: props) => {
  console.log('=== coordinates ===', coordinates)
  const inputs = [
    {
      name: "transporation",
      placeholder: "Transport Stations",
      type: "selectMany",
      options: [{ value: "stops", label: "Stops" }],
      fullWidth: true,
    },
    {
      name: "police",
      placeholder: "Police Stations",
      type: "selectMany",
      options: [{ value: "police_stations", label: "Police Stations" }],
      fullWidth: true,
    },
    {
      name: "education",
      placeholder: "Education",
      type: "selectMany",
      options: [{ value: "schools", label: "Schools" }],
      fullWidth: true,
    },
    {
      name: "medical",
      placeholder: "Medical Center",
      type: "selectMany",
      options: [
        { value: "clinics", label: "Clinics" },
        { value: "pharmacies", label: "Pharmacies" },
        { value: "hospitals", label: "Hospitals" },
        { value: "gp_practices", label: "GP Practices" },
        { value: "scls", label: "Supported Cate Living" },
        { value: "dentists", label: "Dentists" },
      ],
      fullWidth: true,
    },
    {
      name: "fireStations",
      placeholder: "Fire Stations",
      type: "selectMany",
      options: [{ value: "fire_stations", label: "Fire Stations" }],
      fullWidth: true,
    },
    {
      name: "floods",
      title: "Flood Risk",
      type: "checkbox",
      fullWidth: true,
    },
    {
      name: "fire_incidents",
      title: "Fire Incidents",
      type: "checkbox",
      fullWidth: true,
    },
  ];

  return (
    <CardComp
      title="Select Properties"
      body={
        <Fragment>
          {!withoutMap && data?.length ? (
            <SimpleGrid columns={{ base: 1, lg: 4 }} gap={7}>
              <GridItem zIndex={101}>
                <FormRenderer
                  inputs={inputs}
                  onSubmit={(e: object) => onSubmit(e)}
                />
              </GridItem>

              <GridItem colSpan={3} zIndex={100}>
                <GoogleMapComp coordinates={coordinates} data={data} setProperty={setProperty} />
              </GridItem>
            </SimpleGrid>
          ) : (
            <FormRenderer 
              inputs={inputs}
              onSubmit={(e: object) => onSubmit(e)}
            />
          )}
        </Fragment>
      }
    />
  );
};

export default ResultsSearchBox;
