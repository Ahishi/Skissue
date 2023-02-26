<script lang="ts">
  export let section
</script>

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option}
  <div>
    <input name="{section.id}"  type="radio" id="{section.id}-{option.id}" bind:value={option.state}>
    <label for="{section.id}-{option.id}"> {option.label} </label>
  </div>
{/each}