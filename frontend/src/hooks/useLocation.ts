import { useState, useEffect } from "react";

function useLocation() {
  /* This hook updates the user's location every 2 seconds */

  const [loc, setLoc] = useState({lat: 0, lng: 0});

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('position', position);
        setLoc({lat: position.coords.latitude, lng: position.coords.longitude});
      });
    } else {
      console.log("Browser does not support geolocation");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('getting user location');
      getUserLocation();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return loc;
}

function useLocationTest() {
  /* This hook is for testing location functionality */

  const [loc, setLoc] = useState({lat: 51.5, lng: - 0.010});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoc(prevLoc => ({lat: prevLoc.lat, lng: prevLoc.lng + 0.005}));
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return loc;
}

export { useLocation, useLocationTest };
export default useLocation;
