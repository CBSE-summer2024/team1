import React from "react";
import VueAdapter from "./VueAdapter";
import SvelteAdapter from "./SvelteAdapter";

export default function ComponentAdapter({ framework, Component, props }) {
  switch (framework) {
    case "vue":
      return <VueAdapter Component={Component} props={props} />;
    case "svelte":
      return <SvelteAdapter Component={Component} props={props} />;
  }
}
