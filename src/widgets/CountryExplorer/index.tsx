import {
  ListOfCountries,
  SearchCountries,
} from "@/features";
import { Container } from "@/shared/ui";
import { useStoreOfCountries } from "./model/useStoreOfCountries";
import { useQueryOfCountries } from "./hooks/useQueryOfCountries";
import { useEffect, useState } from "react";
import { RequestProcessor } from "@/entities";
import type { ListOfCountriesParams } from "@/shared/types";
import { flushSync } from "react-dom";
import { useErrorMessage } from "./hooks/useErrorMessage";

export function CountryExplorer() {
  const [params, setParams] =
    useState<ListOfCountriesParams>();
  const { listOfCountries, setListOfCountries } =
    useStoreOfCountries();
  const {
    isFetching,
    isError,
    data,
    error,
    refetch,
  } = useQueryOfCountries(params);
  const errorMessage = useErrorMessage(error);

  useEffect(() => {
    if (Array.isArray(data)) {
      setListOfCountries(data);
    }
  }, [data, setListOfCountries]);

  function onSubmitHandler(
    params: ListOfCountriesParams
  ) {
    flushSync(() => setParams(params));
    refetch();
  }
  return (
    <Container main>
      <div className="flex justify-between gap-4 mb-8">
        <SearchCountries
          onSubmit={onSubmitHandler}
        />
      </div>
      <RequestProcessor
        isFetching={isFetching}
        isError={isError}
        error={errorMessage}
      >
        <ListOfCountries list={listOfCountries} />
      </RequestProcessor>
    </Container>
  );
}
