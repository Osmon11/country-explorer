import { CountryInformation } from "@/widgets";

import { AppBar } from "@/entities";

export default function CountryPage() {
  return (
    <>
      <AppBar backBtn />
      <CountryInformation />
    </>
  );
}
