<script>
  import { ROUTES, EVENTS, buildUrl } from "shared";
  export let product;
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
      <button class="btn btn-primary w-full" on:click={() => {
        const productUrl = buildUrl(ROUTES.PRODUCT_DETAILS, { id: product.id });
        const event = new CustomEvent(EVENTS.ROUTING_EVENT, {
          bubbles: true,
          detail: { url: productUrl, id: product.id } 
        }); 
        window.dispatchEvent(event);
      }}>Details</button>
    </div>
  </div>
</div>
