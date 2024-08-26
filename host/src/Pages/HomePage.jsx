import React, { useEffect } from "react";
import SvelteApp from "DiscoveryTeam/App";
import { supabase } from "../dbConfig";
import ComponentAdapter from "../Adapters/ComponentAdapter";
import DummyProducts from "./DummyProducts.jsx";

export default function HomePage() {
  let svelteProps = {
    products: DummyProducts,
  };
  useEffect(() => {
    supabase
      .from("products")
      .select()
      .then((val) => {
        //svelteProps.products = val.data;
      });
  }, []);

  return (
    <ComponentAdapter
      framework="svelte"
      Component={SvelteApp}
      props={svelteProps}
    />
  );
}
