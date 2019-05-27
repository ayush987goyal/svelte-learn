<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Ayush";
  let selectedOption = 1;

  $: console.log(val);
  $: console.log(selectedOption);
</script>

<CustomInput bind:val />

<Toggle bind:chosenOption={selectedOption} />
