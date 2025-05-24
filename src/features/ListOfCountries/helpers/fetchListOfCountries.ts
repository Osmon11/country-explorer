import { appAxios } from "@/shared/config";
import type { ListOfCountries } from "../types/countriesStore";

export function fetchListOfCountries() {
  return appAxios
    .get<ListOfCountries>(
      "/all?fields=name,capital,region,population,flags,cca2"
    )
    .then((res) =>
      Array.isArray(res.data) ? res.data : []
    );
}
