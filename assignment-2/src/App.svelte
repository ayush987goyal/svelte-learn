<script>
  let passwordInput = "";

  let passwords = [];

  function addPassword() {
    if (passwordInput.length < 5 || passwordInput.length > 10) return;

    passwords = [...passwords, { pass: passwordInput, id: Math.random() }];
    passwordInput = "";
  }

  function onPassClick(index) {
    passwords = passwords.filter((_, i) => i !== index);
  }
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add a password input field and save the user input in a variable.</li>
  <li>
    Output "Too short" if the password is shorter than 5 characters and "Too
    long" if it's longer than 10.
  </li>
  <li>
    Output the password in a paragraph tag if it's between these boundaries.
  </li>
  <li>Add a button and let the user add the passwords to an array.</li>
  <li>Output the array values (= passwords) in a unordered list (ul tag).</li>
  <li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<hr />

<input type="password" bind:value={passwordInput} />

{#if passwordInput.length < 5}
  <p>Password too short!</p>
{:else if passwordInput.length > 10}
  <p>Password too long!</p>
{:else}
  <p>Password is: {passwordInput}</p>
{/if}

<button on:click={addPassword}>Add Password</button>

<ul>
  {#each passwords as password, i (password.id)}
    <li on:click={() => onPassClick(i)}>{password.pass}</li>
  {:else}
    <p>Please add some passwords!</p>
  {/each}
</ul>
