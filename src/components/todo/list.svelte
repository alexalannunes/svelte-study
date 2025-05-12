<script lang="ts">
  import type { ITodo } from "../../model/todos";

  let { list = [], onToggle = () => {} } = $props<{
    list: ITodo[];
    onToggle: (id: number) => void;
  }>();
</script>

<!-- markup (zero or more items) goes here -->
<ul>
  {#each list as todo}
    <li data-id={todo.id} class:completed={todo.completed}>
      <input
        type="checkbox"
        onchange={() => {
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
