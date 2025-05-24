import type { Country } from "@/shared/types";

export type ListOfCountries = Pick<
  Country,
  | "name"
  | "capital"
  | "region"
  | "population"
  | "flags"
  | "cca2"
>[];

export interface CountriesStore {
  listOfCountries: ListOfCountries;
  setListOfCountries: (
    payload: ListOfCountries
  ) => void;
}
