import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import SvelteApp from "DiscoveryTeam/App"
import Remote from "UserManagementTeam/UserManagementTeam"
import VueAdapter from "./VueAdapter";
import SvelteAdapter from "./SvelteAdapter"
import { supabase } from "./dbConfig";
const App = () => {
  useEffect(()=>{
    
    supabase.from("products").select().then((val)=>{
      console.log(val)
    })

  },[])
  return(
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <SvelteAdapter Component={SvelteApp}/>
    <VueAdapter Component={Remote}/>
    
    </div>
);
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)