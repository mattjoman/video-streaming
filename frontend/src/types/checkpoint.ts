export interface Checkpoint {
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}

export interface AttemptCheckpoint {
  isVisited: 1 | 0;
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}
