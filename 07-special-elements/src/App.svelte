<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";

  let y;

  $: console.log(y);

  let currTitle = 'My app';

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

  function switchTitle() {
    currTitle = 'A New Title';
  }
</script>

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter />

<svelte:head>
  <title>{currTitle}</title>
</svelte:head>

<button on:click={switchTitle}>Switch Title</button>

<button on:click={toggle}>Toggle Display</button>

<svelte:component
  this={renderedComp.cmp}
  title={renderedComp.title}
  id={renderedComp.id} />

{#each familyStructure as familyMember}
  <FamilyNode member={familyMember} />
{/each}
