/** @jsxImportSource react */
import { ClerkProvider } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import { qwikify$ } from "@builder.io/qwik-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;

function ClerkWrap({ children }: { children: ReactNode[] }) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>{children}</ClerkProvider>
  );
}

export const ClerkWrapper = qwikify$(ClerkWrap, { eagerness: "load" });
