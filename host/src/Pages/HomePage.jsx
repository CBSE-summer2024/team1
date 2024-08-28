import React from "react";
import Header from "DiscoveryTeam/Header";
import ComponentAdapter from "../Adapters/ComponentAdapter";

export default function HomePage() {
  return (
    <ComponentAdapter
      framework="svelte"
      Component={Header}
      props={{ categories: ["Home", "About", "Contact"], products: [] }}
    />
  );
}
