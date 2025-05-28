import type { ReactNode } from "react";

interface ContainerProps {
  main?: boolean;
  className?: string;
  children: ReactNode;
}

export function Container({
  main,
  className = "",
  children,
}: ContainerProps) {
  const Element = main ? "main" : "div";
  return (
    <Element
      className={`max-w-7xl m-auto p-8 ${className}`}
    >
      {children}
    </Element>
  );
}
