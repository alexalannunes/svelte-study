<script lang="ts">
  export let onFilter = (filter: "ALL" | "COMPLETED" | "PENDING") => {};
</script>

<button on:click={() => onFilter("ALL")}>all</button>
<button on:click={() => onFilter("COMPLETED")}>completed</button>
<button on:click={() => onFilter("PENDING")}>pending</button>

<style>
  /* your styles go here */
</style>
