import type { DropdownMenuProps } from "@/shared/ui";

export const regionsWithSubregions: DropdownMenuProps<{
  subList?: DropdownMenuProps<object>["list"];
}>["list"] = [
  {
    key: "Africa",
    value: "Africa",
    subList: [
      {
        key: "Eastern Africa",
        value: "Eastern Africa",
      },
      {
        key: "Middle Africa",
        value: "Middle Africa",
      },
      {
        key: "Northern Africa",
        value: "Northern Africa",
      },
      {
        key: "Southern Africa",
        value: "Southern Africa",
      },
      {
        key: "Western Africa",
        value: "Western Africa",
      },
    ],
  },
  {
    key: "Americas",
    value: "Americas",
    subList: [
      { key: "Caribbean", value: "Caribbean" },
      {
        key: "Central America",
        value: "Central America",
      },
      {
        key: "North America",
        value: "North America",
      },
      {
        key: "South America",
        value: "South America",
      },
    ],
  },
  {
    key: "Antarctic",
    value: "Antarctic",
  },
  {
    key: "Asia",
    value: "Asia",
    subList: [
      {
        key: "Central Asia",
        value: "Central Asia",
      },
      {
        key: "Eastern Asia",
        value: "Eastern Asia",
      },
      {
        key: "Southeast Asia",
        value: "Southeast Asia",
      },
      {
        key: "Southern Asia",
        value: "Southern Asia",
      },
      {
        key: "Western Asia",
        value: "Western Asia",
      },
    ],
  },
  {
    key: "Europe",
    value: "Europe",
    subList: [
      {
        key: "Eastern Europe",
        value: "Eastern Europe",
      },
      {
        key: "Northern Europe",
        value: "Northern Europe",
      },
      {
        key: "Southeast Europe",
        value: "Southeast Europe",
      },
      {
        key: "Southern Europe",
        value: "Southern Europe",
      },
      {
        key: "Western Europe",
        value: "Western Europe",
      },
    ],
  },
  {
    key: "Oceania",
    value: "Oceania",
    subList: [
      {
        key: "Australia and New Zealand",
        value: "Australia and New Zealand",
      },
      { key: "Melanesia", value: "Melanesia" },
      { key: "Micronesia", value: "Micronesia" },
      { key: "Polynesia", value: "Polynesia" },
    ],
  },
  {
    key: "Worldwide",
    value: "Worldwide",
  },
];
