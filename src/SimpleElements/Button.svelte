<script>
  export let text = "";
  export let cssClass = "";
  export let onClick;
</script>

<button class={cssClass} on:click={onClick}>
  {text}
</button>

<style>
  button {
    color: white;
    background-color: #c39e6f;
    width: 180px;
    border-radius: 13px;
    font-size: 18px;
    padding-top: 14px;
    padding-bottom: 14px;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
    border: none;
  }

  button:hover {
    filter: brightness(85%);
  }
</style>
