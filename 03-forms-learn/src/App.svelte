<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Ayush";
  let selectedOption = 1;
  let price = 10;
  let agreed = false;
  let favColor = "green";

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
</script>

<CustomInput bind:val />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms?
</label>

<h1>Favorite color?</h1>
<label>
  <input type="radio" name="colors" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="radio" name="colors" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="radio" name="colors" value="blue" bind:group={favColor} />
  Blue
</label>
