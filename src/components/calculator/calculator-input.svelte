<script lang="ts">
  let { value } = $props<{ value: string }>();
</script>

<input type="text" readonly {value} />

<style>
  input {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    font-size: 14px;
    text-align: right;
  }
</style>
