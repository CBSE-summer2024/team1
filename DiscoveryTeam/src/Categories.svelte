<script>
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
  ];
</script>

<div class="p-4 bg-gray-100 rounded-lg shadow-md fixed-height overflow-y-auto">
  <ul class="list-none">
    {#each categories as category}
      <li
        class="p-2 bg-gray-200 mb-2 rounded flex items-center justify-center text-center"
      >
        {category}
      </li>
    {/each}
  </ul>
</div>

<style>
  .fixed-height {
    height: 400px;
  }
</style>
