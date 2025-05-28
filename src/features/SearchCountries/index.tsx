import type { ListOfCountriesParams } from "@/shared/types";

import {
  RegionSelector,
  SearchByName,
} from "./ui";

interface SearchCountriesProps {
  params: ListOfCountriesParams;
  onParamsChange: (
    params: ListOfCountriesParams,
  ) => void;
}

export function SearchCountries({
  params,
  onParamsChange,
}: SearchCountriesProps) {
  return (
    <div className="w-full max-w-sm flex">
      <RegionSelector
        onSelect={(value) => {
          onParamsChange({
            name: params.name,
            ...value,
          });
        }}
      />
      <SearchByName
        onSearch={(name) =>
          onParamsChange({ ...params, name })
        }
      />
    </div>
  );
}
