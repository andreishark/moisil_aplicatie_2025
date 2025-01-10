"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // if (!mounted) {
  //   return <>{children}</>; // Render children without ThemeProvider during SSR
  // }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
