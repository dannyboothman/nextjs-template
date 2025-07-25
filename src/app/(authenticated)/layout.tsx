"use client";
import { Providers } from "@/providers";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

export default Layout;
