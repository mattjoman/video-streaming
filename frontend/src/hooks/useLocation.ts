import { useState, useEffect } from "react";

function useLocation() {
  /* This hook updates the user's location every 2 seconds */

  const [loc, setLoc] = useState({lat: 0, lng: 0});

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const l = {            // ADDED
          lat: position.coords.latitude,  // ADDED
          lng: position.coords.longitude, // ADDED
        };
        console.log(l);
        setLoc(l);
      });
    } else {
      console.log("Browser does not support geolocation");
    }
  };

  setTimeout(() => {
    getUserLocation();
    clearTimeout();
  }, 2000);

  return loc;
}

function useLocationTest() {
  /* This hook is for testing location functionality */

  const [loc, setLoc] = useState({lat: 51.5, lng: - 0.010});

  useEffect(() => {
    setTimeout(() => {
      setLoc({lat: loc.lat, lng: loc.lng + 0.005});
      clearTimeout();
    }, 2000);
  }, [loc, setLoc]);

  return loc;
}

export { useLocation, useLocationTest };
export default useLocation;
