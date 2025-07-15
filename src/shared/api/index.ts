const BASE_URL = 'https://www.swapi.tech/api';

export const getPlanets = async (name: string) => {
  const res = await fetch(`${BASE_URL}/planets/?name=${name}`);
  const data = await res.json();
  return data;
};
