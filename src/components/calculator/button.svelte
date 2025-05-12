<script lang="ts">
  let { onClick, value, isOperator, isHighlight, isFull } = $props<{
    onClick?: (value: string) => void;
    value: string;
    isOperator?: boolean;
    isHighlight?: boolean;
    isFull?: boolean;
  }>();
</script>

<button
  class:isOperator
  class:isHighlight
  class:isFull
  onclick={() => onClick(value)}
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
