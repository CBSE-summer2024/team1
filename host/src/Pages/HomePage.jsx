import React from "react";
import { useEffect } from "react";
import Header from "DiscoveryTeam/Header";
import ComponentAdapter from "../Adapters/ComponentAdapter";
import { supabase } from "../dbConfig";

const images_urls = [
  "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
];
export default function HomePage() {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const getCategories = async()=>{

      const { data, error } = await supabase.from("categories").select();
   
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
      }
    }
    getCategories()
  }, []);
  return (
    <ComponentAdapter
      framework="svelte"
      Component={Header}
      props={{
        categories: categories,
        images_urls: images_urls,
      }}
    />
  );
}
