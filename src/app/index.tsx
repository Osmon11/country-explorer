import { createFileRoute } from "@tanstack/react-router";

import Main from "@/pages/Main";

import "./index.css";

export const Route = createFileRoute("/")({
  component: Main,
});
