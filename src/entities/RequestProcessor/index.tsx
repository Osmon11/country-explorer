import { type ReactNode, Suspense } from "react";

import {
  Alert,
  type AlertProps,
  Spinner,
} from "@/shared/ui";

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
