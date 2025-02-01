import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const params = await searchParams;

  const layout = params.layout || "grid";
  const search = params.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductPage;
