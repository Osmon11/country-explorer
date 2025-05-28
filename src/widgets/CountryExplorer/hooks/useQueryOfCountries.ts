import { appAxios } from "@/shared/config";
import type {
  AppAxiosError,
  ListOfCountries,
  ListOfCountriesParams,
} from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useQueryOfCountries(
  params: ListOfCountriesParams = {}
) {
  return useQuery<ListOfCountries, AppAxiosError>(
    {
      queryKey: ["countries"],
      queryFn: () => fetchListOfCountries(params),
      // By default, TanStack Query retries failed requests up to 3 times.
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
}

export function fetchListOfCountries(
  params: ListOfCountriesParams
) {
  let endpoint = "all";
  if (params.name) {
    endpoint = `name/${params.name}`;
  }
  if (params.region) {
    endpoint = `region/${params.region}`;
  }
  if (params.subregion) {
    endpoint = `subregion/${params.subregion}`;
  }
  return appAxios
    .get<ListOfCountries>(
      `/${endpoint}?fields=name,capital,region,population,flags,cca2`
    )
    .then((res) => {
      if (Array.isArray(res.data)) {
        if (
          (params.region || params.subregion) &&
          params.name
        ) {
          // Search by name if the query is by region or subregion.
          const data = res.data.filter((item) =>
            params.name !== undefined
              ? item.name.common
                  .toLowerCase()
                  .includes(
                    params.name?.toLowerCase()
                  )
              : true
          );
          if (data.length === 0) {
            // If nothing is found, throw a 404 error.
            throw new AxiosError(
              undefined,
              undefined,
              undefined,
              undefined,
              { ...res, status: 404 }
            );
          }
          return data;
        } else return res.data;
      }
      return [];
    });
}
