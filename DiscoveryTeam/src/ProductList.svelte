<script>
  export let products;
  let product = products[0];
  console.log(products);
  import ProductCard from "./ProductCard.svelte";
  import { onMount } from "svelte";

  // Number of items to show initially
  let itemsToShow;

  // Number of items to load on each load more click
  let loadMoreIncrement;

  // Function to set itemsToShow and loadMoreIncrement based on screen size
  function setItemsToShow() {
    const width = window.innerWidth;
    if (width >= 1024) {
      // lg
      itemsToShow = 15;
      loadMoreIncrement = 10;
    } else if (width >= 768) {
      // md
      itemsToShow = 12;
      loadMoreIncrement = 9;
    } else {
      // small
      itemsToShow = 10;
      loadMoreIncrement = 5;
    }
  }

  // Call setItemsToShow on mount and on window resize
  onMount(() => {
    setItemsToShow();
    window.addEventListener("resize", setItemsToShow);
    return () => window.removeEventListener("resize", setItemsToShow);
  });

  // Function to load more items
  function loadMore() {
    itemsToShow += loadMoreIncrement;
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {#each products.slice(0, itemsToShow) as product}
    <ProductCard {product} />
  {/each}
</div>

{#if itemsToShow < products.length}
  <div class="flex justify-center w-full mt-4">
    <button
      on:click={loadMore}
      class="p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
    >
      Load More
    </button>
  </div>
{/if}
