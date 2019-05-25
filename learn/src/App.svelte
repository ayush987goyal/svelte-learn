<script>
  let name = "Ayush";
  let age = 23;

  $: uppercaseName = name.toUpperCase();

  const changeAge = () => {
    age += 1;
  };

  function changeName() {
    name = "Kushal";
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={changeAge}>Change Age</button>
<button on:click={changeName}>Change name</button>
