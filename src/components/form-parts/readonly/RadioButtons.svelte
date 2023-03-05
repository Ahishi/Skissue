<script lang="ts">
  export let section;
  export let readonly: boolean;
</script>

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option}
  <div class="flex">
    <input class="my-auto mr-0.5 bg-background-dark text-primary ring-0 disabled:opacity-60" disabled={readonly} type="radio" name="{section.id}"
           id="{section.id}-{option.id}" bind:value={option.state}>
    <label class="my-auto" for="{section.id}-{option.id}"> {option.label} </label>
  </div>
{/each}