import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

export function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="mt-[62px]">{children}</main>
      <Footer />
    </div>
  );
}
