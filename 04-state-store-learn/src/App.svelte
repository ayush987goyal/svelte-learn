<script>
  import Button from "./UI/Button.svelte";
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";

  let showCart = true;
</script>

<Button on:click={() => (showCart = !showCart)}>Toggle Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />
