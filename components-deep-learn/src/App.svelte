<script>
  import Product from "./Product.svelte";
</script>

<Product
  productTitle="A Book"
  on:add-to-cart={() => alert('Added to cart!')}
  on:delete={() => alert('Deleted!')} />
