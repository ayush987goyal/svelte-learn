<script>
  import { onMount } from "svelte";
  import { API_URL } from "./config.js";

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

      hobbies = Object.values(data);
      return hobbies;
    })
    .catch(err => {
      isLoading = false;
      console.log(err);
    });

  function addHobby() {
    hobbies = [...hobbies, hobbyInput.value];

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
    {#each hobbies as hobby}
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
