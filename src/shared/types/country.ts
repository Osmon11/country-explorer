export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: { [key: string]: Translation };
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  ara: string;
  eng: string;
  tir: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: {
    [key: string]: Translation | undefined;
  };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: null;
  regex: null;
}

export type ListOfCountries = Pick<
  Country,
  | "name"
  | "capital"
  | "region"
  | "population"
  | "flags"
  | "cca2"
>[];

export interface ListOfCountriesParams {
  name?: string;
  region?: string;
  subregion?: string;
}

export interface SortOptions {
  name?: "asc" | "desc";
  population?: "asc" | "desc";
}
