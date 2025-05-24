import { useQuery } from "@tanstack/react-query";
import { useCountriesStore } from "./model/useCountriesStore";
import { fetchListOfCountries } from "./helpers/fetchListOfCountries";
import { Alert, Spinner } from "@/shared/ui";
import { CountryCard } from "@/entities";
import type { ListOfCountries } from "./types/countriesStore";
import { useEffect } from "react";

export function ListOfCountries() {
  const { listOfCountries, setListOfCountries } =
    useCountriesStore();
  const { isPending, isError, data, error } =
    useQuery<ListOfCountries>({
      queryKey: ["countries"],
      queryFn: fetchListOfCountries,
    });

  useEffect(() => {
    if (Array.isArray(data)) {
      setListOfCountries(data);
    }
  }, [data, setListOfCountries]);

  return (
    <>
      {isError && (
        <Alert
          title={error.name}
          description={error.message}
        />
      )}
      {isPending && <Spinner />}
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
    </>
  );
}
