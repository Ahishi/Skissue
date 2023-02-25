<script lang="ts">
  export let section
</script>

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option}
  <div>
    <input name="{section.id}"  type="radio" id="{option.id}" bind:value={option.state}>
    <label> {option.label} </label>
  </div>
{/each}