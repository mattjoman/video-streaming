export interface Checkpoint {
  _id: string;
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}

export interface AttemptCheckpoint {
  _id: string;
  isVisited: 0 | 1;
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}
