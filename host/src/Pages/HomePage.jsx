
import React,{useEffect}from 'react'
import SvelteApp from "DiscoveryTeam/App"
import { supabase } from "../dbConfig";
import ComponentAdapter from '../Adapters/ComponentAdapter';

export default function HomePage() {

    useEffect(()=>{
    
        supabase.from("products").select().then((val)=>{
            console.log(val)
        })
    
    },[])

    const svelteProps = {
        name: 'MyApp',
        framework: 'Svelte',
    };


    return (
        <ComponentAdapter framework="svelte" Component={SvelteApp}  props={svelteProps}/>
    )
}
