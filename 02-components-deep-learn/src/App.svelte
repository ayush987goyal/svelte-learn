<script>
  import { tick } from "svelte";

  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

  let products = [{ id: "p1", title: "A Book", price: 9.99 }];

  let text = "This is some dummy text";

  let showModal = false;
  let closable = false;

  function addToCart(event) {
    console.log(event);
  }

  function deleteProduct(event) {
    console.log(event);
  }

  function transform(event) {
    if (event.which !== 9) {
      return;
    }

    event.preventDefault();

    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const value = event.target.value;

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  }
</script>

{#each products as prod}
  <Product {...prod} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal
    on:cancel={() => (showModal = false)}
    on:close={() => (showModal = false)}
    let:didAgree={closable}>
    <h1 slot="header">Hello!</h1>
    <p>This works!</p>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closable}>
      Confirm
    </button>
  </Modal>
{/if}

<textarea rows="5" bind:value={text} on:keydown={transform} />
