import {
  Link,
  type LinkProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface CardProps {
  image?: string;
  alt?: string;
  title: string;
  children?: ReactNode;
  linkProps?: LinkProps;
}

export function Card({
  image,
  alt,
  title,
  children,
  linkProps,
}: CardProps) {
  const Element = linkProps ? Link : "div";
  return (
    <Element
      className="block max-w-2xl p-4 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      {...linkProps}
    >
      <img
        className="w-full h-[200px] md:h-[150px] rounded-lg object-cover object-center mb-4"
        src={image}
        alt={alt}
      />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {children}
    </Element>
  );
}
