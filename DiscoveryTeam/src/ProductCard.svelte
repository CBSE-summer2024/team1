<script>
  export let product; // Accepting product as a prop
</script>

<div class="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={product.image_url} 
        alt={product.name}
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{product.name}!</h2> 
      <p>{product.description}</p> 
      <p><strong>Price:</strong> ${product.price}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
</div>
