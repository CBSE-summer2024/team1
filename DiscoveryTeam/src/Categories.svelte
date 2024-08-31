<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import {getCategories} from "shared"
  
  export let navigationFunction;
  let categories = writable([]);
  onMount(async()=>{
    const {data,error} = await getCategories();
    categories.set(data)
  })
  

</script>

<div class="p-4 bg-gray-100 rounded-lg shadow-md fixed-height overflow-y-auto">
  <ul class="list-none">
    {#each $categories as category}
      <li
        class="p-2 bg-gray-200 mb-2 rounded flex items-center justify-center text-center"
      >
        <button on:click={()=>navigationFunction('/products',{state:{category:category.id}})}>
          {category.name}
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .fixed-height {
    height: 400px;
  }
</style>
