<script>
  const images_urls = [
  "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
];
</script>

<div>
  <div class="carousel w-full fixed-height">
    {#each images_urls as image_url, index}
      <div id="slide{index + 1}" class="carousel-item relative w-full">
        <img src={image_url} class="w-full" alt="carousel" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a
            href={`#slide${index === 0 ? images_urls.length : index}`}
            class="btn btn-circle">❮</a
          >
          <a
            href={`#slide${index + 2 > images_urls.length ? 1 : index + 2}`}
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
