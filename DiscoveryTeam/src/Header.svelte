<script>
  import Categories from "./Categories.svelte";
  import Carousel from "./Carousel.svelte";
  export let navigationFunction;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
  <div class="md:col-span-2 lg:col-span-4">
    <Carousel/>
  </div>
  <div class="md:col-span-1 lg:col-span-1">
    <Categories  {navigationFunction} />
  </div>
</div>
