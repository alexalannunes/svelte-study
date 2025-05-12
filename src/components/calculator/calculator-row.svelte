<script lang="ts">
  // your script goes here
</script>

<div class="row">
  <slot />
</div>

<!-- markup (zero or more items) goes here -->

<style>
  .row {
    display: flex;
    gap: 4px;
  }
  :global(.row:first-of-type > button:last-child) {
    border-top-right-radius: 4px;
  }
  :global(.row:first-of-type > button:first-of-type) {
    border-top-left-radius: 4px;
  }
  :global(.row:last-of-type > button:last-child) {
    border-bottom-right-radius: 4px;
  }
  :global(.row:last-of-type > button:first-of-type) {
    border-bottom-left-radius: 4px;
  }
</style>
