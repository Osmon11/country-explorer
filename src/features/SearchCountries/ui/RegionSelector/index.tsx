import { useState } from "react";
import { Popover } from "react-tiny-popover";

import type { ListOfCountriesParams } from "@/shared/types";
import { DropdownMenu } from "@/shared/ui";

import { regionsWithSubregions } from "../../config/regionsWithSubregions";

interface RegionSelectorProps {
  onSelect: (value: Value) => void;
}

type Value = Pick<
  ListOfCountriesParams,
  "region" | "subregion"
>;

export function RegionSelector({
  onSelect,
}: RegionSelectorProps) {
  const [value, setValue] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] =
    useState<string>();

  function selectHandler(
    type: "region" | "subregion",
  ) {
    return function (
      item: (typeof regionsWithSubregions)[0],
    ) {
      const result: Value = {
        region: undefined,
        subregion: undefined,
      };
      if (item.key !== "Worldwide") {
        result[type] = item.value.toString();
      }
      setValue(result[type]);
      onSelect(result);
      if (!item.subList) {
        closeMenu();
      }
    };
  }

  function closeMenu() {
    setIsOpen(false);
    setCurrentSubmenu(undefined);
  }
  return (
    <Popover
      isOpen={isOpen}
      padding={8}
      align="start"
      positions={[
        "bottom",
        "top",
        "right",
        "left",
      ]}
      onClickOutside={closeMenu}
      content={
        <DropdownMenu
          list={regionsWithSubregions}
          onSelect={selectHandler("region")}
          renderItem={(item) =>
            Array.isArray(item.subList) &&
            item.subList.length > 0 ? (
              <Popover
                isOpen={
                  currentSubmenu === item.key
                }
                padding={8}
                align="start"
                positions={[
                  "right",
                  "left",
                  "bottom",
                  "top",
                ]}
                content={
                  <DropdownMenu
                    list={item.subList}
                    onSelect={selectHandler(
                      "subregion",
                    )}
                  />
                }
              >
                <button
                  type="button"
                  className="cursor-pointer flex px-4 py-2 items-center justify-between w-full focus:ring-4 focus:outline-none focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500"
                  onClick={() =>
                    setCurrentSubmenu(item.key)
                  }
                >
                  {item.key}
                  <svg
                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </Popover>
            ) : (
              <div className="px-4 py-2">
                {item.key}
              </div>
            )
          }
        />
      }
    >
      <button
        type="button"
        className="cursor-pointer shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${value ?? "Region"} `}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
    </Popover>
  );
}
