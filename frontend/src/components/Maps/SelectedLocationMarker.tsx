import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function SelectedLocationMarker({ position }: { position: { lat: number, lng: number } }) {
  return (
    <AdvancedMarker position={position}>
      <Pin background={'#00ff00'}
        borderColor={'#000000'}
        glyphColor={'#ffffff'}
      />
    </AdvancedMarker>
  )
}

export default SelectedLocationMarker;
export { SelectedLocationMarker };

