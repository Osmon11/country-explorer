import {
  useEffect,
  useState,
  useTransition,
} from "react";
import { flushSync } from "react-dom";

import {
  ListOfCountries,
  SearchCountries,
  SortCountries,
} from "@/features";

import { RequestProcessor } from "@/entities";

import type {
  ListOfCountriesParams,
  SortOptions,
} from "@/shared/types";
import { Container } from "@/shared/ui";

import { useErrorMessage } from "./hooks/useErrorMessage";
import { useQueryOfCountries } from "./hooks/useQueryOfCountries";
import { useSortedListOfCountries } from "./hooks/useSortedListOfCountries";
import { useStoreOfCountries } from "./model/useStoreOfCountries";

export function CountryExplorer() {
  const [params, setParams] =
    useState<ListOfCountriesParams>({});
  const [sortBy, setSortBy] =
    useState<keyof SortOptions>("name");
  const [direction, setDirection] =
    useState<SortOptions["name"]>();
  const listOfCountries = useStoreOfCountries(
    (state) => state.listOfCountries,
  );
  const setListOfCountries = useStoreOfCountries(
    (state) => state.setListOfCountries,
  );
  const {
    isFetching,
    isError,
    data,
    error,
    refetch,
  } = useQueryOfCountries(params);
  const sortedData = useSortedListOfCountries(
    sortBy,
    direction,
    data,
  );
  const errorMessage = useErrorMessage(error);
  const [isPending, startTransition] =
    useTransition();

  useEffect(() => {
    startTransition(() => {
      setListOfCountries(sortedData);
    });
  }, [sortedData, setListOfCountries]);

  function onSortingChange(
    sortBy: keyof SortOptions,
    direction: SortOptions["name"],
  ) {
    setSortBy(sortBy);
    setDirection(direction);
  }

  function onParamsChange(
    params: ListOfCountriesParams,
  ) {
    flushSync(() => {
      setParams(params);
    });
    refetch();
  }
  return (
    <Container main>
      <div className="flex justify-between gap-4 flex-wrap-reverse sm:flex-nowrap mb-8">
        <SortCountries
          onChange={onSortingChange}
        />
        <SearchCountries
          params={params}
          onParamsChange={onParamsChange}
        />
      </div>
      <RequestProcessor
        isFetching={isFetching || isPending}
        isError={isError}
        error={errorMessage}
      >
        <ListOfCountries list={listOfCountries} />
      </RequestProcessor>
    </Container>
  );
}
