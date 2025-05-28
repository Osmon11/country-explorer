import { CountryCard } from "@/entities";
import type { ListOfCountries as TypeListOfCountries } from "@/shared/types";

interface ListOfCountriesProps {
  list: TypeListOfCountries;
}

export function ListOfCountries({
  list,
}: ListOfCountriesProps) {
  return (
    Array.isArray(list) && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((country) => (
          <CountryCard
            key={country.cca2}
            {...country}
          />
        ))}
      </div>
    )
  );
}
