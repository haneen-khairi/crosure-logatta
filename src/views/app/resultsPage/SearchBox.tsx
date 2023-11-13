// import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";

import { locationProps } from ".";
import CardComp from "../../../components/cards";
import FormRenderer from "../../../components/forms/FormRenderer";
import GoogleMapComp from "../../../components/googleMap";

interface props {
  withoutMap?: boolean;
  data?: locationProps[];
  setProperty?: any;
  onSubmit?: any;
}

const  ResultsSearchBox = ({
  withoutMap,
  data,
  setProperty,
  onSubmit,
}: props) => {
  const inputs = [
    {
      name: "transporation",
      placeholder: "Transport Stations",
      type: "selectMany",
      options: [{ value: "stops", label: "Stops" }],
      lg: 4,
    },
    {
      name: "police",
      placeholder: "Police Stations",
      type: "selectMany",
      options: [{ value: "police_stations", label: "Police Stations" }],
      lg: 4,
    },
    {
      name: "education",
      placeholder: "Education",
      type: "selectMany",
      options: [{ value: "schools", label: "Schools" }],
      lg: 4,
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
      lg: 4,
    },
    {
      name: "fireStations",
      placeholder: "Fire Stations",
      type: "selectMany",
      options: [{ value: "fire_stations", label: "Fire Stations" }],
      lg: true,
    },
    {
      name: "floods",
      title: "Flood Risk",
      type: "checkbox",
      lg: true,
    },
    {
      name: "fire_incidents",
      title: "Fire Incidents",
      type: "checkbox",
      lg: true,
    },
  ];

  return (
    <CardComp
      title="Select Properties"
      body={
        <Fragment>
          {!withoutMap && data?.length ? <>
            {/* <SimpleGrid columns={5} gap={'18px'}> */}
            <FormRenderer
            googleMapsForm={true}
            columns={5}
              inputs={inputs}
              onSubmit={(e: object) => onSubmit(e)}
            />
        {/* </SimpleGrid> */}

            <GoogleMapComp data={data} setProperty={setProperty} />
          </>
           : (
            <FormRenderer 
              googleMapsForm={true}
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
