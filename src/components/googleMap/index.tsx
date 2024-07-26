import { IconButton } from "@chakra-ui/react";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

import { borderHalfRound } from "../../utils/consts";
import { locationProps, locationTypes } from "../../views/app/resultsPage";

const containerStyle = {
  width: "100%",
  height: "65vh",
  margin: "0",
  borderRadius: borderHalfRound,
};

interface props {
  data?: locationProps[];
  setProperty?: any;
}

const GoogleMapComp = React.memo(({ data, setProperty }: props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAE-OzpZjuJkIeVxRJ2J9gGmrCgtYdftbk",
  });

  const center = {
    lat: 51.499075,
    lng: -0.124742,
  };

  const [mapp, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    (map: any) => {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);

      console.log({ mapp });
    },
    [data]
  );

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, [data]);

  return isLoaded && data?.length ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: parseFloat(data[0]?.lat), lng: parseFloat(data[0]?.lng) }}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {data?.map((prop, i) => {
        const { lat, lng, type } = prop;

        const typ = locationTypes.find(({ name }) => name === type);

        return (
          <OverlayView
            position={{
              lat: parseFloat(lat),
              lng: parseFloat(lng),
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            key={i}
          >
            <IconButton
              isRound
              variant="solid"
              colorScheme={typ?.color || "primary"}
              aria-label="Done"
              fontSize="20px"
              onClick={() =>
                type === "property"
                  ? setProperty(prop)
                  : console.log("Not a property, no summary to show")
              }
              icon={<FontAwesomeIcon icon={typ?.icon || faCheck} />}
            />
          </OverlayView>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
});

export default GoogleMapComp;
