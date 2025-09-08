"use client";

import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <div {...props}>{children}</div>;
}
