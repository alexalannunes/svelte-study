<script lang="ts">
  import type { ITodo } from "../../model/todos";

  export let list: ITodo[] = [];
  export let onToggle = (id: number) => {};
</script>

<!-- markup (zero or more items) goes here -->
<ul>
  {#each list as todo}
    <li data-id={todo.id} class:completed={todo.completed}>
      <input
        type="checkbox"
        on:change={() => {
          onToggle(todo.id);
        }}
        name={`item-${todo.id}`}
        id={`item-${todo.id}`}
        checked={todo.completed}
      />
      <label for={`item-${todo.id}`}>
        {todo.text}
      </label>
    </li>
  {/each}
</ul>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
