<script lang="ts">
  export let value: string;
  export let isOperator = false;
  export let isHighlight = false;
  export let isFull = false;
  export let onClick = (value: string) => {};
</script>

<button
  class:isOperator
  class:isHighlight
  class:isFull
  on:click={() => onClick(value)}
>
  {value}
</button>

<style>
  button {
    --border-color: #ccc;
    font-size: 14px;
    width: 25%;
    border: 1px solid var(--border-color);
  }
  .isOperator {
    --border-color: #950000;
    background-color: red;
  }
  .isHighlight {
    --border-color: #ae7100;
    background-color: orange;
  }
  .isFull {
    width: 100%;
  }
  button:active {
    background-color: #ddd;
  }
</style>
