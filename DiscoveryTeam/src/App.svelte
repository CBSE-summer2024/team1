<script>
  export let products;
  export let categories;
  import ProductList from "./ProductList.svelte";
  import Carousel from "./Carousel.svelte";
  import Categories from "./Categories.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
  <div class="md:col-span-2 lg:col-span-4">
    <Carousel {products} />
  </div>
  <div class="md:col-span-1 lg:col-span-1">
    <Categories {categories} />
  </div>
</div>
