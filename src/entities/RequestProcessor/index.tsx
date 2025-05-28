import {
  Alert,
  Spinner,
  type AlertProps,
} from "@/shared/ui";
import type { ReactNode } from "react";

interface RequestProcessorProps {
  isFetching: boolean;
  isError: boolean;
  error?: AlertProps;
  children: ReactNode;
}

export function RequestProcessor({
  isFetching,
  isError,
  error,
  children,
}: RequestProcessorProps) {
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        error && <Alert {...error} />
      ) : (
        children
      )}
    </>
  );
}
