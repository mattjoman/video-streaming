const INTERACTION_DISTANCE = 1; // In km

/**
 * Converts a difference in latitude to an approximate N/S displacement in km.
 * @param lat - The latitude of the point
 * @returns The distance in km.
 */
function latToDist(dLat: number) {
  return (dLat / 180) * (40008 / 2);
}

/**
 * Converts a difference in longitude to an approximate E/W displacement in km.
 * @param dLng - The longitude of the point
 * @param lat - The latitude of the point
 * @returns The distance in km.
 */
function lonToDist(dLng: number, lat: number) {
  return (dLng / 360) * 40008 * Math.cos((lat * Math.PI) / 180);
}

/**
 * Checks if the checkpoint is within the INTERACTION_DISTANCE of the user's location.
 * All distances are in km.
 * @param usrLoc - The user's location
 * @param cptLoc - The checkpoint's location
 * @returns True if the checkpoint is within the INTERACTION_DISTANCE of the user's location, false otherwise
 */
export function isAtCheckpoint(usrLoc: { lng: number, lat: number }, cptLoc: { lng: number, lat: number }) {
  const dLng = cptLoc.lng - usrLoc.lng;
  const dLat = cptLoc.lat - usrLoc.lat;

  const dN = latToDist(dLat);
  const dE = lonToDist(dLng, usrLoc.lat);

  const dist = (dN ** 2 + dE ** 2) ** 0.5;
  if (dist < INTERACTION_DISTANCE) {
    return true;
  }
  return false;
}
