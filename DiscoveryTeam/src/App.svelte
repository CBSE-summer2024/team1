<script>
  export let products;
  import ProductList from "./ProductList.svelte";
  import Carousel from "./Carousel.svelte";
</script>

<Carousel {products} />
