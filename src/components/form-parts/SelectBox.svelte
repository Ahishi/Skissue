<script lang="ts">
  export let section
</script>

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option}
  <div>
    <input type="checkbox" id="{option.id}" bind:value={option.state}>
    <label> {option.label} </label>
    {#if option.inputField}
      <input type="text" class="ml-0.5 border-b border-b-white px-0.5 bg-transparent focus:outline-none" bind:value={option.inputText}>
    {/if}
  </div>
{/each}