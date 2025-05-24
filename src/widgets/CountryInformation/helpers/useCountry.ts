import { appAxios } from "@/shared/config";
import type { Country } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function fetchCountry(code: string) {
  return appAxios
    .get<Country[]>(`/alpha/${code}`)
    .then((res) =>
      Array.isArray(res.data)
        ? res.data[0]
        : undefined
    );
}

// Search by cca2, ccn3, cca3 or cioc country code
export function useCountry(code: string) {
  return useQuery({
    queryKey: ["country", code],
    queryFn: () => fetchCountry(code),
  });
}
