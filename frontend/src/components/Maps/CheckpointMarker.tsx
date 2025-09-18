import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function CheckpointMarker({ position }: { position: { lat: number, lng: number } }) {
  return (
    <AdvancedMarker position={position}>
      <Pin background={'#ff0000'}
        borderColor={'#000000'}
        glyphColor={'#ffffff'}
      />
    </AdvancedMarker>
  )
}

export default CheckpointMarker;
export { CheckpointMarker };
