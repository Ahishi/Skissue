<script lang="ts">
  export let section; //section JSON prop
  export let readonly: boolean; //is readonly
</script>

<!-- Section title -->
<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<!-- Section body -->
{#each section.options as option, index}
  <div class="flex">

    <!-- Checkbox -->
    <input class="bg-background-dark rounded-md disabled:opacity-80 text-primary my-auto" type="checkbox" id="{section.id}-{option.id}" disabled={readonly} bind:value={option.state}
           checked={option.state}>

    <!-- Label -->
    <label class="my-auto mx-0.5" for="{section.id}-{option.id}"> {option.label} </label>

    <!-- Add-on textfield -->
    {#if option.inputField}
      <input type="text" class="py-0.25 ml-0.5 my-auto border-x-0 border-t-0 disabled:opacity-60 transition opacity-80 focus:opacity-100 focus:border-white focus:ring-0 border-b  border-b-background-light px-0.5 bg-transparent"
             bind:value={option.inputText} disabled={readonly}>
    {/if}

  </div>
{/each}