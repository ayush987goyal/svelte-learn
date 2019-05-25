<script>
  let name = "Ayush";
  let age = 23;

  const changeAge = () => {
    age += 1;
  };
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}, my age is {age}!</h1>
<button on:click={changeAge}>Change Age</button>
