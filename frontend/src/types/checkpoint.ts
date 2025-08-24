export interface Checkpoint {
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}

export interface AttemptCheckpoint {
  isVisited: 0 | 1;
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}
