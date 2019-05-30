<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";

  let familyStructure = [
    {
      isParent: true,
      name: "Chris",
      children: [
        {
          isParent: true,
          name: "Moe",
          children: [{ isParent: false, name: "Julie" }]
        }
      ]
    },
    { isParent: false, name: "Ana" }
  ];

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

{#each familyStructure as familyMember}
  <FamilyNode member={familyMember} />
{/each}
