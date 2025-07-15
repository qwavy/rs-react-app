export interface Planet {
  name: string;
  uid: string;
  url: string;
}

export interface PlanetInformation {
  description: string;
  properties: {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  };
  uid: string;
  __v: number;
  _id: string;
}
