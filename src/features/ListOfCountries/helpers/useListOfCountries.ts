import { appAxios } from "@/shared/config";
import type { ListOfCountries } from "../types/countriesStore";
import { useQuery } from "@tanstack/react-query";

export function fetchListOfCountries() {
  return appAxios
    .get<ListOfCountries>(
      "/all?fields=name,capital,region,population,flags,cca2"
    )
    .then((res) =>
      Array.isArray(res.data) ? res.data : []
    );
}

export function useListOfCountries() {
  return useQuery<ListOfCountries>({
    queryKey: ["countries"],
    queryFn: fetchListOfCountries,
  });
}
