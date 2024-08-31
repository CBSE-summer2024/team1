import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "DiscoveryTeam/ProductsList";
import ComponentAdapter from "../Adapters/ComponentAdapter";
import {  useLocation, useSearchParams } from "react-router-dom";

export default function ProductsPage() {

    // todo :: uncomment code when merge categories
    // const { state } = useLocation();
    // const componentProps = {
    //     ...(state?.category && { category: state.category })
    // };
    return (
        <ComponentAdapter
            framework="svelte"
            Component={ProductsList}
            // props={{props:componentProps}}
        />
    );
}