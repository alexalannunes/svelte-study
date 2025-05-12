<script lang="ts">
  import type { ITodo } from "../../model/todos";
  import Filter from "./filter.svelte";

  import Input from "./input.svelte";
  import List from "./list.svelte";

  let todos: ITodo[] = [
    { id: 1746971852310, text: "delk", completed: false },
    { id: 1746971853002, text: "dlkmdew", completed: false },
    { id: 1746971853758, text: "dklmdel", completed: true },
    { id: 1746971854483, text: "kldmew", completed: false },
    { id: 1746971855165, text: "lkmw", completed: false },
    { id: 1746971855940, text: "klrmflr", completed: false },
  ];

  let filter: "ALL" | "COMPLETED" | "PENDING" = "ALL";

  function onSubmit(value: string) {
    todos = todos.concat({
      id: Date.now(),
      text: value,
      completed: false,
    });
  }

  function onToggle(id: number) {
    todos = todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    }));
  }

  function onFilter(filter_: "ALL" | "COMPLETED" | "PENDING") {
    filter = filter_;
  }
  $: filtered = (() => {
    if (filter === "COMPLETED") {
      return todos.filter((item) => item.completed);
    }
    if (filter === "PENDING") {
      return todos.filter((item) => !item.completed);
    }
    return todos;
  })();
</script>

<!-- markup (zero or more items) goes here -->
<div class="todo">
  <Input {onSubmit} />
  <Filter {onFilter} />
  <List list={filtered} {onToggle} />
</div>

<style>
  /* your styles go here */
</style>
