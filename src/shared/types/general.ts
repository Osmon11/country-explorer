import type { AxiosError } from "axios";

export type AppAxiosError = AxiosError<{
  message: string;
}>;
