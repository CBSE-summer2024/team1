import React from "react";
import Header from "DiscoveryTeam/Header";
import ComponentAdapter from "../Adapters/ComponentAdapter";
import { useNavigate, useNavigation } from "react-router-dom";



export default function HomePage() {
  const navigate=useNavigate();
  return (
    <ComponentAdapter
      framework="svelte"
      Component={Header}
      props={{
        navigationFunction:navigate
      }}
    />
  );
}
