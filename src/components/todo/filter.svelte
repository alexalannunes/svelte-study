<script lang="ts">
  let { onFilter } = $props<{
    onFilter: (filter: "ALL" | "COMPLETED" | "PENDING") => void;
  }>();
</script>

<button onclick={() => onFilter("ALL")}>all</button>
<button onclick={() => onFilter("COMPLETED")}>completed</button>
<button onclick={() => onFilter("PENDING")}>pending</button>

<style>
  /* your styles go here */
</style>
