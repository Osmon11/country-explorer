import type { Country } from "@/shared/types";
import { Card } from "@/shared/ui";

type CountryCardProps = Pick<
  Country,
  | "cca2"
  | "flags"
  | "name"
  | "capital"
  | "region"
  | "population"
>;

export function CountryCard({
  cca2,
  flags,
  name,
  capital,
  region,
  population,
}: CountryCardProps) {
  const capitalName =
    Array.isArray(capital) && capital.length > 0
      ? capital[0]
      : "N/A";
  const fieldsToRender = [
    { key: "Capital", value: capitalName },
    { key: "Region", value: region },
    {
      key: "Population",
      value: population.toLocaleString(),
    },
  ];
  return (
    <Card
      title={name.common}
      image={flags.svg}
      alt={flags.alt}
      linkProps={{
        to: "/$cca2",
        params: { cca2 },
      }}
    >
      {fieldsToRender.map((item) => (
        <p
          className="text-base font-normal text-gray-900 dark:text-white mb-2"
          key={`${name.common}-${item.value}`}
        >
          <span className="font-bold">
            {`${item.key}:`}
          </span>
          {` ${item.value}`}
        </p>
      ))}
    </Card>
  );
}
