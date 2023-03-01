<script lang="ts">
  export let section
</script>

<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<div class="flex">
  {#each section.options as option}
    <input type="checkbox" id="{section.id}-{option.id}" bind:value={option.state}>
    <label class="ml-0.5 mr-1" for="{section.id}-{option.id}"> {option.label} </label>
  {/each}
</div>