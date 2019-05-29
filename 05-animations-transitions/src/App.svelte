<script>
  // import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { fade, fly, slide, scale } from "svelte/transition";

  import Spring from "./Spring.svelte";

  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn
  });

  let boxInput;
  let showPara = false;

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxes = [];

  function addBox() {
    boxes = [...boxes, boxInput.value];
  }

  function discard(value) {
    boxes = boxes.filter(item => item !== value);
  }
</script>

<style>
  div {
    width: 10rem;
    height: 10rem;
    background: #ccc;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: 1rem;
  }
</style>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<button on:click={() => (showPara = !showPara)}>Toggle</button>
{#if showPara}
  <p transition:fly={{ x: 300 }}>Can you see me?</p>
{/if}

<hr />

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>

{#if showPara}
  {#each boxes as box (box)}
    <div
      transition:fly={{ x: 200, y: 3 }}
      on:click={discard.bind(this, box)}
      on:introstart={() => console.log('Adding element starts')}
      on:introend={() => console.log('Adding element ends')}
      on:outrostart={() => console.log('Removing element starts')}
      on:outroend={() => console.log('Removing element ends')}>
       {box}
    </div>
  {/each}
{/if}
