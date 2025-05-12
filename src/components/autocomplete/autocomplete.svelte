<script lang="ts">
  let open = $state(false);
  let index = $state(-1);
  let value = $state("");

  const list = ["alex", "alan", "nunes"];

  const filteredList = $derived(
    list.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
  );

  const filteredListLength = $derived(filteredList.length);
</script>

<!-- markup (zero or more items) goes here -->
<div class="autocomplete">
  <input
    type="text"
    placeholder="autocomplete"
    bind:value
    onfocus={() => (open = true)}
    onblur={() => (open = false)}
    oninput={() => (index = -1)}
    onkeydown={(e) => {
      if (e.key === "Enter") {
        value = filteredList[index];
        open = false;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!open) open = true; // reopen if arrow down
        if (index === filteredListLength - 1) {
          index = 0;
        } else {
          index += 1;
        }
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();

        if (index === 0) {
          index = filteredListLength - 1;
        } else {
          index -= 1;
        }
      }
    }}
  />

  {#if open}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="content"
      onmousedown={(e) => {
        e.preventDefault();
      }}
    >
      {#if filteredListLength}
        {#each filteredList as item, i}
          <button class:focus={index === i}>{item}</button>
        {/each}
      {/if}

      {#if !filteredListLength}
        <div>nothing found...</div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .autocomplete {
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: absolute;
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3);
  }
  .focus {
    background-color: #909090;
  }
</style>
