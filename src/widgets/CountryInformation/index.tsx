import { Container } from "@/shared/ui";
import { getRouteApi } from "@tanstack/react-router";
import { useCountry } from "./helpers";
import { RequestProcessor } from "@/entities";
import { CountrySummary } from "./ui";

const route = getRouteApi("/$cca2");

export function CountryInformation() {
  const { cca2 } = route.useParams();
  const {
    isPending,
    isError,
    data: country,
    error,
  } = useCountry(cca2);

  return (
    <Container>
      <RequestProcessor
        isPending={isPending}
        isError={isError}
        error={
          error
            ? {
                title: error.name,
                descriptions: error.message,
              }
            : undefined
        }
      >
        {country !== undefined && (
          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8">
            <div className="w-full">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {country.name.common}
              </h1>
              <h2 className="text-4xl tracking-tight text-gray-900 dark:text-white mb-8">
                {country.name.official}
              </h2>
              <CountrySummary country={country} />
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto rounded-lg object-cover object-center mb-4"
                src={country.flags.svg}
                alt={country.flags.alt}
              />
            </div>
          </div>
        )}
      </RequestProcessor>
    </Container>
  );
}
