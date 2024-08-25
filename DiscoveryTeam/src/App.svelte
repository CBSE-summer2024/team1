<script>
  export let name;
  export let framework;
  import Card from "./ProductCard.svelte";
  import ProductCard from './ProductCard.svelte'; // Assuming your component is named ProductCard.svelte

  let product = {
    name: 'Shoes',
    description: 'If a dog chews shoes whose shoes does he choose?',
    price: 59.99,
    image_url: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
  };
</script>

<div class="grid grid-cols-3 gap-y-12">

  <ProductCard {product} />
  <ProductCard {product} />
  <ProductCard {product} />
  <ProductCard {product} />
  <ProductCard {product} />
</div>
