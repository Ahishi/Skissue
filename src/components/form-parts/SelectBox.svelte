<script lang="ts">
  export let section
</script>

<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>
{#each section.options as option}
  <div>
    <input type="checkbox" id="{section.id}-{option.id}" bind:value={option.state}>
    <label for="{section.id}-{option.id}" > {option.label} </label>
    {#if option.inputField}
      <input type="text" class="ml-0.5 border-b border-b-white px-0.5 bg-transparent focus:outline-none" bind:value={option.inputText}>
    {/if}
  </div>
{/each}