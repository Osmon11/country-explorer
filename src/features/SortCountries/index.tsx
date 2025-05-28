import type { SortOptions } from "@/shared/types";
import { useState, type JSX } from "react";

interface SortCountriesProps {
  onChange: (
    sortBy: keyof SortOptions,
    direction: SortOptions["name"]
  ) => void;
}

interface SortState {
  value: SortOptions["name"];
  icon: JSX.Element;
}

export function SortCountries({
  onChange,
}: SortCountriesProps) {
  const [name, setName] =
    useState<SortState>(defaultState);
  const [population, setPopulation] =
    useState<SortState>(defaultState);

  function onChangeHandler(
    key: keyof SortOptions,
    state: SortState | undefined
  ) {
    if (state) {
      const newState = {
        name:
          key === "name" ? state : defaultState,
        population:
          key === "population"
            ? state
            : defaultState,
      };
      setName(newState.name);
      setPopulation(newState.population);
      onChange(key, state.value);
    }
  }
  return (
    <div
      className="w-full max-w-sm inline-flex rounded-md shadow-xs"
      role="group"
    >
      <button
        type="button"
        className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() =>
          onChangeHandler(
            "name",
            // Get the next value based on the current one.
            mapState.get(name.value)
          )
        }
      >
        {name.icon}
        Name
      </button>
      <button
        type="button"
        className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() =>
          onChangeHandler(
            "population",
            // Get the next value based on the current one.
            mapState.get(population.value)
          )
        }
      >
        {population.icon}
        Population
      </button>
    </div>
  );
}

const SortIcon = (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.832 3.445a1 1 0 0 0-1.664 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .832-1.555l-4-6Zm-1.664 17.11a1 1 0 0 0 1.664 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.832 1.555l4 6Z"
      clipRule="evenodd"
    />
  </svg>
);

const AscendingIcon = (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
      clipRule="evenodd"
    />
  </svg>
);

const DescendingIcon = (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
      clipRule="evenodd"
    />
  </svg>
);

const mapState = new Map<
  SortOptions["name"],
  SortState
>();

mapState.set("asc", {
  value: undefined,
  icon: SortIcon,
});

mapState.set(undefined, {
  value: "desc",
  icon: DescendingIcon,
});

mapState.set("desc", {
  value: "asc",
  icon: AscendingIcon,
});

const defaultState = {
  value: undefined,
  icon: SortIcon,
};
