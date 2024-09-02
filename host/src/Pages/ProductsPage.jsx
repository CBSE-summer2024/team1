import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsList from "DiscoveryTeam/ProductsList";
import ComponentAdapter from "../Adapters/ComponentAdapter";
import {  useLocation, useSearchParams } from "react-router-dom";

export default function ProductsPage() {
    const { state } = useLocation();
    const componentProps = {
        ...(state?.category && { category: state.category })
    };
    return (
        <ComponentAdapter
            framework="svelte"
            Component={ProductsList}
            props={{
                props:{
                    ...componentProps,
                }
                
            }}
        />
    );
}