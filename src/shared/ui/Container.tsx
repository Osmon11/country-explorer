import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <main
      className={`max-w-7xl m-auto p-8 ${className}`}
    >
      {children}
    </main>
  );
}
