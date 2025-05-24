import { Alert, Spinner } from "@/shared/ui";
import type { ReactNode } from "react";

interface RequestProcessorProps {
  isPending: boolean;
  isError: boolean;
  error?: { title: string; descriptions: string };
  children: ReactNode;
}

export function RequestProcessor({
  isPending,
  isError,
  error,
  children,
}: RequestProcessorProps) {
  return (
    <>
      {isError && error && <Alert {...error} />}
      {isPending && <Spinner />}
      {children}
    </>
  );
}
