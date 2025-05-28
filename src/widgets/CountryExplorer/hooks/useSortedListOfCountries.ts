import { useMemo } from "react";

import type {
  ListOfCountries,
  SortOptions,
} from "@/shared/types";

export function useSortedListOfCountries(
  sortBy: keyof SortOptions,
  direction: SortOptions["name"],
  data: ListOfCountries | undefined,
) {
  const sortedData = useMemo(() => {
    if (Array.isArray(data)) {
      let result = data;
      if (direction) {
        result = [...data].sort((a, b) => {
          let valueA: string | number;
          let valueB: string | number;

          if (sortBy === "name") {
            valueA = a.name.common.toLowerCase();
            valueB = b.name.common.toLowerCase();
          } else {
            valueA = a.population;
            valueB = b.population;
          }

          const compare =
            valueA < valueB
              ? -1
              : valueA > valueB
                ? 1
                : 0;
          return direction === "asc"
            ? compare
            : -compare;
        });
      }
      return result;
    } else return [];
  }, [sortBy, direction, data]);

  return sortedData;
}
