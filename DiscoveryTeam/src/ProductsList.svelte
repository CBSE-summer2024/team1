<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { getProducts } from "shared";
  import ProductCard from "./ProductCard.svelte";
  export let props ;
  console.log(props)
  let products = writable([]);
  let category = ''; 
  let pageRange = { start: 0, end: 9 };
  let isEnd = writable(false);
  
  onMount(async () => {
    if (props && props.category) {
      category = props.category;
      
    }
    const { data } = await getProducts(pageRange,category);
    console.log(data)
    if (data) {
      products.set(data);
    }
  });

  async function loadMore() {
    const newEnd = pageRange.end + 10;
    pageRange = { start: pageRange.end + 1, end: newEnd };

    const { data } = await getProducts(pageRange,category);
    console.log(data)
    if (data.length > 0) {
      products.update((currentProducts) => [...currentProducts, ...data]);
    } else {
      isEnd.set(true);
    }
  }

</script>

<div>
  {#if $products.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {#each $products as product}
        <ProductCard product={product} navigationFunction={props.navigationFunction}/>
      {/each}
    </div>
  {/if}

  {#if $isEnd}
    <p>All products loaded.</p>
  {:else}
    <button on:click={loadMore} class="btn btn-primary">Load More</button>
  {/if}
</div>
