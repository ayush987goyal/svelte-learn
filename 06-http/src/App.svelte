<script>
  import { onMount } from "svelte";
  import { API_URL } from "./config.js";
  import hobbyStore from "./hobby-store.js";

  let hobbyInput;
  let hobbies = [];
  let isLoading = false;

  isLoading = true;
  let getHobbies = fetch(`${API_URL}/hobbies.json`)
    .then(res => {
      if (!res.ok) {
        throw "Failed";
      }

      return res.json();
    })
    .then(data => {
      isLoading = false;

      hobbyStore.setHobbies(Object.values(data));
      return hobbyStore;
    })
    .catch(err => {
      isLoading = false;
      console.log(err);
    });

  function addHobby() {
    // hobbies = [...hobbies, hobbyInput.value];

    isLoading = true;
    fetch(`${API_URL}/hobbies.json`, {
      method: "POST",
      body: JSON.stringify(hobbyInput.value),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        isLoading = false;
        if (!res.ok) {
          throw new Error("Failed!");
        }

        hobbyStore.addHobby(hobbyInput.value);
        alert("Saved data!");
      })
      .catch(err => {
        isLoading = false;
        console.log(err);
      });
  }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}

<!-- {#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    {#each hobbyData as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await} -->
