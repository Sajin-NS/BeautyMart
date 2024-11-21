import React from "react";
import { Layout } from "../Layout";
import Banner from "../Component/Home/Banner";
import ProductList from "../Component/Home/ProductList";

export function Home() {
  return (
    <Layout>
      <Banner />
      <ProductList />
    </Layout>
  );
}
