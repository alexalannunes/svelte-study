<script lang="ts">
  let open = false;
  let index = -1;
  let value = "";

  const list = ["alex", "alan", "nunes"];

  $: filteredList = list.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase()),
  );

  $: filteredListLength = filteredList.length;
</script>

<!-- markup (zero or more items) goes here -->
<div class="autocomplete">
  <input
    type="text"
    placeholder="autocomplete"
    bind:value
    on:focus={() => (open = true)}
    on:blur={() => (open = false)}
    on:input={() => (index = -1)}
    on:keydown={(e) => {
      if (e.key === "Enter") {
        value = filteredList[index];
        open = false;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
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
      on:mousedown={(e) => {
        e.preventDefault();
      }}
    >
      {#if filteredListLength}
        {#each filteredList as item, i}
          <div class:focus={index === i}>{item}</div>
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
