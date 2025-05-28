import type { ListOfCountriesParams } from "@/shared/types";
import {
  SearchByName,
  RegionSelector,
} from "./ui";
import { useState } from "react";

interface SearchCountriesProps {
  onSubmit: (
    params: ListOfCountriesParams
  ) => void;
}

export function SearchCountries({
  onSubmit,
}: SearchCountriesProps) {
  const [params, setParams] =
    useState<ListOfCountriesParams>({});

  function onSearch(name: string) {
    if (
      name ||
      params.region ||
      params.subregion
    ) {
      onSubmit({
        name,
        region: params.region,
        subregion: params.subregion,
      });
    }
  }
  return (
    <div className="w-full max-w-sm flex">
      <RegionSelector
        onSelect={(value) => {
          setParams({
            name: params.name,
            ...value,
          });
        }}
      />
      <SearchByName onSearch={onSearch} />
    </div>
  );
}
