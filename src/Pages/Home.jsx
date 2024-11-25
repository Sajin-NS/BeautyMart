import React from "react";
import { Layout } from "../Layout";
import Banner from "../Component/Home/Banner";
import ProductList from "../Component/Home/ProductList";
import TrendingProject from "../Component/Home/TrendingProduct";

export function Home() {
  return (
    <Layout>
      <Banner />
      <TrendingProject />
      <ProductList />
    </Layout>
  );
}
