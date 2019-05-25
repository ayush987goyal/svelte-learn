<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Ayush";
  let age = 23;
  let jobTitle = "";
  let description = "";
  let imageUrl = "";

  $: uppercaseName = name.toUpperCase();

  $: if (name === "Kushal") {
    age = 18;
  }

  const changeAge = () => {
    age += 1;
  };

  function changeName() {
    name = "Kushal";
  }

  function nameInput(event) {
    name = event.target.value;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={changeAge}>Change Age</button>
<!-- <button on:click={changeName}>Change name</button> -->
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />
<input type="text" bind:value={jobTitle} />
<input type="text" bind:value={imageUrl} />
<textarea rows="3" bind:value={description} />

<ContactCard userName={name} {jobTitle} {description} {imageUrl} />
