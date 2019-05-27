<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Ayush";
  let selectedOption = 1;
  let price = 10;
  let agreed = false;
  let favColor = "green";
  let multiFavColor = ["green"];
  let singleFavColor = "red";

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(multiFavColor);
  $: console.log(singleFavColor);
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

<h1>Favorite multi-color?</h1>
<label>
  <input type="checkbox" name="colors" value="red" bind:group={multiFavColor} />
  Red
</label>
<label>
  <input
    type="checkbox"
    name="colors"
    value="green"
    bind:group={multiFavColor} />
  Green
</label>
<label>
  <input
    type="checkbox"
    name="colors"
    value="blue"
    bind:group={multiFavColor} />
  Blue
</label>

<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
