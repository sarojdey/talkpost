// src/app/(main)/layout.tsx

import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Talk Post",
  description: "A chat and post sharing platform",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
