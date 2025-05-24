import { useCountriesStore } from "./model/useCountriesStore";
import {
  CountryCard,
  RequestProcessor,
} from "@/entities";
import type { ListOfCountries } from "./types/countriesStore";
import { useEffect } from "react";
import { useListOfCountries } from "./helpers";

export function ListOfCountries() {
  const { listOfCountries, setListOfCountries } =
    useCountriesStore();
  const { isPending, isError, data, error } =
    useListOfCountries();

  useEffect(() => {
    if (Array.isArray(data)) {
      setListOfCountries(data);
    }
  }, [data, setListOfCountries]);

  return (
    <RequestProcessor
      isPending={isPending}
      isError={isError}
      error={
        error
          ? {
              title: error.name,
              descriptions: error.message,
            }
          : undefined
      }
    >
      {Array.isArray(listOfCountries) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listOfCountries.map((country) => (
            <CountryCard
              key={country.cca2}
              {...country}
            />
          ))}
        </div>
      )}
    </RequestProcessor>
  );
}
