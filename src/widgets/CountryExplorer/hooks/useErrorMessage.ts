import type { AppAxiosError } from "@/shared/types";

export function useErrorMessage(
  error: AppAxiosError | null,
) {
  if (error === null) return undefined;
  let result:
    | {
        title: string;
        description?: string;
      }
    | undefined = undefined;
  if (
    error.response?.config.url?.includes("all")
  ) {
    result = {
      title: error.name,
      description:
        "message" in error.response.data
          ? error.response.data.message
          : error.message,
    };
  } else {
    result = {
      title:
        error.status === 404
          ? "No results were found"
          : "Something went wrong",
    };
  }
  return result;
}
