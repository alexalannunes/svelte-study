<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Calculator from "./components/calculator/calculator.svelte";
  import Todo from "./components/todo/todo.svelte";
  import Autocomplete from "./components/autocomplete/autocomplete.svelte";
</script>

<main>
  <Counter />
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
