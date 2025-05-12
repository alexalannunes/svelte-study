<script lang="ts">
  // your script goes here
  let { onSubmit } = $props<{ onSubmit: (value: string) => void }>();
  let value = $state("");
</script>

<!-- markup (zero or more items) goes here -->
<form
  onsubmit={(e) => {
    e.preventDefault();
    onSubmit(value);
    value = "";
  }}
>
  <input bind:value />
</form>

<style>
  /* your styles go here */
</style>
