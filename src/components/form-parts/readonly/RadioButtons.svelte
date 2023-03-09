<script lang="ts">
  import { form } from "../../../routes/preset/stores";

  export let index;
  let section = $form.sections[index]
  export let readonly;
</script>

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option}
  <div class="flex">
    <input class="my-auto mr-0.5 bg-background-dark text-primary ring-0 disabled:opacity-60" disabled={readonly} type="radio" name="{section.id}"
           id="{section.id}-{option.id}" bind:value={$form.sections[section.id].options[index].state}>
    <label class="my-auto" for="{section.id}-{option.id}"> {option.label} </label>
  </div>
{/each}