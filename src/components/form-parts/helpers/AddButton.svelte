<script>
  export let editable;
</script>

<!-- Section editable add -->
{#if editable}
  <button type="button" class="text-left flex opacity-80 hover:opacity-100 w-fit">
    <span class="material-symbols-outlined text-sm my-auto">add</span>
    <span class="ml-0.25 text-sm">Add</span>
  </button>
{/if}