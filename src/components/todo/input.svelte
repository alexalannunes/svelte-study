<script lang="ts">
  // your script goes here
  export let onSubmit = (value: string) => {};
  let value = "";
</script>

<!-- markup (zero or more items) goes here -->
<form
  on:submit={(e) => {
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
