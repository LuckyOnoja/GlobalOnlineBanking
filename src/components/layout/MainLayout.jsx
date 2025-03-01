"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  // Check if the current page is an auth page
  const isAuthPage = [
    "/propeneer-login",
    "/propeneer-register",
    "/propeneer-checkout",
    "/propeneer-success",
    "/propeneer-fail",
    "/login",
    "/register",
  ].includes(pathname);

  // Check if the current page is a Propeneer page
  const isPropeneerPage = pathname.includes("propeneer");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}

      <main className="flex-grow ">{children}</main>

      {!isAuthPage && <Footer />}
    </div>
  );
};

export default MainLayout;
