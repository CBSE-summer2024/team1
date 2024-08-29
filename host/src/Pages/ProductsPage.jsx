import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "DiscoveryTeam/ProductList";
import { supabase } from "../dbConfig";
import ComponentAdapter from "../Adapters/ComponentAdapter";

export default function ProductsPage() {
  const { id } = useParams();
  const [loadMoreIncrement, setLoadMoreIncrement] = React.useState(0);
  const [products, setProducts] = useState([]);
  const [pageRange, setPageRange] = useState({ start: 0, end: 0 });
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setItemsToShowAndLoadMore();

    window.addEventListener("resize", setItemsToShowAndLoadMore);
    return () => {
      window.removeEventListener("resize", setItemsToShowAndLoadMore);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };
    fetchProducts();
  }, [pageRange]);

  const getProducts = async () => {
    if (id !== undefined) {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("category_id", id)
        .range(pageRange.start, pageRange.end - 1);

      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }
      setProducts((prevProducts) => [...prevProducts, ...data]);
    } else {
      const { data, error } = await supabase
        .from("products")
        .select()
        .range(pageRange.start, pageRange.end - 1);

      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }
      setProducts((prevProducts) => [...prevProducts, ...data]);
    }
  };

  const setItemsToShowAndLoadMore = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      // lg
      setPageRange({ start: 0, end: 10 });
      setLoadMoreIncrement(10);
    } else if (width >= 768) {
      // md
      setPageRange({ start: 0, end: 9 });
      setLoadMoreIncrement(6);
    } else {
      // small
      setPageRange({ start: 0, end: 4 });
      setLoadMoreIncrement(3);
    }
  };

  function loadMore() {
    setPageRange({
      start: pageRange.end,
      end: pageRange.end + loadMoreIncrement,
    });
    if (pageRange.end > products.length) {
      setIsEnd(true);
    }
  }
  return (
    <>
      {products.length > 0 ? (
        <ComponentAdapter
          framework="svelte"
          Component={ProductList}
          props={{ products: products }}
        />
      ) : (
        <p>No Products Found</p>
      )}
      {isEnd ? null : (
        <button className="btn mx-auto my-5 block" onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
