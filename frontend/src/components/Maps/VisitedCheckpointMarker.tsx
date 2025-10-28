import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function VisitedCheckpointMarker({ position }: { position: { lat: number, lng: number } }) {
  return (
    <AdvancedMarker position={position}>
      <Pin background={'#0000ff'}
        borderColor={'#000000'}
        glyphColor={'#ffffff'}
      />
    </AdvancedMarker>
  );
}

export default VisitedCheckpointMarker;
export { VisitedCheckpointMarker };

