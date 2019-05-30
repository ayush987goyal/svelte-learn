<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";

  let renderedComp = { cmp: Product, title: "Test Product", id: "p1" };

  function toggle() {
    if (renderedComp.cmp === Product) {
      renderedComp = { cmp: CartItem, title: "Test Cart Item", id: "p2" };
    } else {
      renderedComp = { cmp: Product, title: "Test Product", id: "p1" };
    }
  }
</script>

<button on:click={toggle}>Toggle Display</button>

<svelte:component
  this={renderedComp.cmp}
  title={renderedComp.title}
  id={renderedComp.id} />
