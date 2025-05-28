import { create } from "zustand";

import type { ListOfCountries } from "@/shared/types";

export interface CountriesStore {
  listOfCountries: ListOfCountries;
  setListOfCountries: (
    payload: ListOfCountries,
  ) => void;
}

export const useStoreOfCountries =
  create<CountriesStore>((set) => ({
    listOfCountries: [],
    setListOfCountries(payload) {
      set({ listOfCountries: payload });
    },
  }));
