import {
  Alert,
  Spinner,
  type AlertProps,
} from "@/shared/ui";
import { Suspense, type ReactNode } from "react";

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
    <Suspense fallback={<Spinner />}>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        error && <Alert {...error} />
      ) : (
        children
      )}
    </Suspense>
  );
}
