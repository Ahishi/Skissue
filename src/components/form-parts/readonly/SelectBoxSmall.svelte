<script lang="ts">
  import { form } from "../../../routes/form/stores";

  export let index;
  let section = $form.sections[index]
  export let readonly: boolean;
</script>

<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<div class="flex">
  {#each section.options as option}
    <input class="bg-background-dark text-primary my-auto rounded-md disabled:opacity-60" type="checkbox"
           disabled={readonly} id="{section.id}-{option.id}" bind:checked={$form.sections[section.id].options[index].state}>
    <label class="ml-0.5 mr-1 my-auto" for="{section.id}-{option.id}"> {option.label} </label>
  {/each}
</div>