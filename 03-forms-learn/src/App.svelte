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
  let usernameInput;
  let customInputRef;

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(multiFavColor);
  $: console.log(singleFavColor);
  $: console.log(customInputRef);

  function saveData() {
    console.log(usernameInput.value);
    console.dir(usernameInput);

    customInputRef.empty();
  }
</script>

<CustomInput bind:val bind:this={customInputRef} />

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

<hr />

<input type="text" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>
