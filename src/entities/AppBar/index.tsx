import {
  Button,
  Container,
  ThemeController,
} from "@/shared/ui";
import {
  useCanGoBack,
  useRouter,
} from "@tanstack/react-router";

interface AppBarProps {
  backBtn?: boolean;
}

export function AppBar({ backBtn }: AppBarProps) {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  return (
    <nav className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <Container className="flex flex-wrap items-center justify-between pt-4 pb-4">
        {backBtn && canGoBack ? (
          <Button
            onClick={() => router.history.back()}
          >
            <svg
              className="rounded-full rotate-180 w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            Back
          </Button>
        ) : (
          <a href="https://www.linkedin.com/in/osmon11/">
            <img
              className="size-12 rounded-full"
              src="/weAre.svg"
              alt="logo"
            />
          </a>
        )}
        <ThemeController />
      </Container>
    </nav>
  );
}
