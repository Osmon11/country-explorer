import { AppBar } from "@/entities";
import { CountryInformation } from "@/widgets";

export default function CountryPage() {
  return (
    <>
      <AppBar backBtn />
      <CountryInformation />
    </>
  );
}
