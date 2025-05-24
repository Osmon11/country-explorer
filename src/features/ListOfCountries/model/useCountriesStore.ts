import { create } from "zustand";
import type { CountriesStore } from "../types/countriesStore";

export const useCountriesStore =
  create<CountriesStore>((set) => ({
    listOfCountries: [],
    setListOfCountries(payload) {
      set({ listOfCountries: payload });
    },
  }));
