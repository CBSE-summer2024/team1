<script>
  export let products;
  import ProductCard from "./ProductCard.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {#each products as product}
    <ProductCard {product} />
  {/each}
</div>
