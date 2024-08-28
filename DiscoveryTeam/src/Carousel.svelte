<script>
  export let products;
</script>

<div>
  <div class="carousel w-full fixed-height">
    {#each products as product, index}
      <div id="slide{index + 1}" class="carousel-item relative w-full">
        <img src={product.image_url} class="w-full" alt={product.name} />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a
            href={`#slide${index === 0 ? products.length : index}`}
            class="btn btn-circle">❮</a
          >
          <a
            href={`#slide${index + 2 > products.length ? 1 : index + 2}`}
            class="btn btn-circle">❯</a
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .fixed-height {
    height: 400px;
  }

  .carousel-item img {
    height: 100%;
    object-fit: cover;
  }
</style>
