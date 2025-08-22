export interface Checkpoint {
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
}
