<script lang="ts">
  export let section; //section JSON prop
  export let readonly; //is readonly
</script>

<!-- Section title -->
<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<!-- Section body -->
{#each section.options as option, index}
  <div>

    <!-- Checkbox -->
    <input type="checkbox" id="{section.id}-{option.id}" disabled={readonly} bind:value={option.state}
           checked={option.state}>

    <!-- Label -->
    <label for="{section.id}-{option.id}"> {option.label} </label>

    <!-- Add-on textfield -->
    {#if option.inputField}
      <input type="text" class="ml-0.5 border-b border-b-white px-0.5 bg-transparent focus:outline-none"
             bind:value={option.inputText} disabled={readonly}>
    {/if}

  </div>
{/each}