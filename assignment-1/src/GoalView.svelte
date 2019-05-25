<script>
  export let goal;

  $: isAttn = goal.includes("!");
</script>

<style>
  .attn {
    color: red;
  }
</style>

<h1 class:attn={isAttn}>{goal}</h1>
