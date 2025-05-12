<script lang="ts">
  import Calculator from "./components/calculator/calculator.svelte";
  import Todo from "./components/todo/todo.svelte";
  import Autocomplete from "./components/autocomplete/autocomplete.svelte";
</script>

<main>
  <Calculator />
  <Todo />
  <Autocomplete />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
