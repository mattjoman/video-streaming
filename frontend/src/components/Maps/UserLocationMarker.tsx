import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function UserLocationMarker({ position }: { position: { lat: number, lng: number } }) {
  return (
    <AdvancedMarker position={position}>
      <Pin background={'#009999'}
        borderColor={'#000000'}
        glyphColor={'#ffffff'}
      />
    </AdvancedMarker>
  )
}

export default UserLocationMarker;
export { UserLocationMarker };
