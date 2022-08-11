export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}

export interface Rank {
  importance: number;
  popularity: number;
  confidence: number;
  confidence_city_level: number;
  match_type: string;
}

export interface Bbox {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
}

export interface Result {
  datasource: Datasource;
  city: string;
  county: string;
  state: string;
  country: string;
  country_code: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  result_type: string;
  rank: Rank;
  place_id: string;
  bbox: Bbox;
  name: string;
  state_code: string;
  village: string;
  suburb: string;
  postcode: string;
  hamlet: string;
}

export interface Parsed {
  city: string;
  expected_type: string;
}

export interface Query {
  text: string;
  parsed: Parsed;
}

export interface GeoApifyResponse {
  results: Result[];
  query: Query;
}
