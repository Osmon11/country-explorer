import type { Country } from "@/shared/types";

interface CountrySummaryProps {
  country: Country;
}

export function CountrySummary({
  country,
}: CountrySummaryProps) {
  const fieldsToRender = [
    {
      key: "Capital",
      value: country.capital,
    },
    {
      key: "Region",
      value: country.region,
    },
    {
      key: "Subregion",
      value: country.subregion,
    },
    {
      key: "Population",
      value: country.population.toLocaleString(),
    },
    {
      key: "Currency",
      value: Object.keys(country.currencies)
        .map((key) => {
          const currency =
            country.currencies[key];
          return `${currency.name} ${currency.symbol} (${key})`;
        })
        .join(", "),
    },
    {
      key: "Language(s)",
      value: Object.values(
        country.languages,
      ).join(", "),
    },
    {
      key: "Timezone(s)",
      value: country.timezones.join(", "),
    },
    {
      key: "Area",
      value: `${country.area.toLocaleString()} km2`,
    },
  ];

  return fieldsToRender.map((item) => (
    <p
      className="text-xl font-normal text-gray-900 dark:text-white mb-2"
      key={item.key}
    >
      <span className="inline-block min-w-[130px] font-bold">
        {`${item.key}:`}
      </span>
      {` ${item.value}`}
    </p>
  ));
}
