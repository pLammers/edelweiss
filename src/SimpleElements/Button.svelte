<script>
  export let text = "";

  const test = () => {
    console.log("HI");
  };
</script>

<button on:click={test}>
  {text}
</button>

<style>
  button {
    color: white;
    background-color: #c39e6f;
    width: 170px;
    border-radius: 8px;
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
    border: none;
  }

  button:hover {
    filter: brightness(85%);
  }
</style>
