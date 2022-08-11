import { useState, useEffect } from 'react';
import { Location } from '../models';
import { GeoApifyResponse } from '../models/geoapifyDTO';

const API_URL = `https://api.geoapify.com/v1/geocode/search?apiKey=${process.env.GEOAPIFY_API_TOKEN}&format=json`;

const useLocationAddress = (address: string) => {
  const [map, setMap] = useState<Location>({ lat: -66.9146017 , lng: 10.506098 });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch(`${API_URL}&text=${address || ''}`);
        const data = (await response.json()) as GeoApifyResponse;
        const { results } = data;
        const [{ lat, lon }] = results;
        setMap({ lat, lng: lon });
      } catch (err) {
        console.log(err);
      }
    };
    getLocation();
  }, []);

  return map;
};

export default useLocationAddress;
