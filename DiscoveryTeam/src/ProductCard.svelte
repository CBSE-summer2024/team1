<script>
  export let product; // Accepting product as a prop
  export let navigationFunction;
</script>

<div class="card bg-base-100 shadow-xl">
  <figure>
    <img src={product.image_url} alt={product.name} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{product.name}!</h2>
    <p>{product.description}</p>
    <p><strong>Price:</strong> ${product.price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary w-full" on:click={()=>navigationFunction(`/products/${product.id}`)}>Details</button>
    </div>
  </div>
</div>
