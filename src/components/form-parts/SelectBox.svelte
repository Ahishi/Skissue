<script lang="ts">
  export let section
</script>

<div class="flex flex-col gap-y-1 border rounded-xl p-8">
  <h4 class="mb-4 font-semibold">{section.title}</h4>
  {#each section.options as option}
    <div>
      <input type="checkbox" id="{option.id}" bind:value={option.state}>
      <label> {option.label} </label>
      {#if option.inputField}
        <input type="text" class="ml-1 rounded-lg px-2" bind:value={option.inputText}>
      {/if}
    </div>
  {/each}
</div>