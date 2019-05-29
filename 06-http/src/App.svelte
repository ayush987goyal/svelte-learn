<script>
  import { API_URL } from "./config.js";

  let hobbyInput;
  let hobbies = [];

  function addHobby() {
    hobbies = [...hobbies, hobbyInput.value];

    fetch(`${API_URL}/hobbies.json`, {
      method: "POST",
      body: JSON.stringify(hobbies),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed!");
        }
      })
      .catch(err => console.log(err));
  }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

<ul>
  {#each hobbies as hobby}
    <li>{hobby}</li>
  {/each}
</ul>
