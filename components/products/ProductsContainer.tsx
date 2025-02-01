import { fetchAllProducts } from "@/utils/actions";
import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}

      <section>
        <div className="flex justify-between items-center ">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className=" flex gap-x-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* PRODUCT */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry No product matched your search
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
