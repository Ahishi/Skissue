<script lang="ts">
  import { form } from "../../../routes/preset/stores";

  export let index;
  let section = $form.sections[index]
  export let readonly: boolean;
</script>

<h4 class="font-semibold">{section.title}</h4>
<textarea
  class="bg-transparent border-x-0 border-t-0 transition opacity-80 focus:opacity-100 focus:border-white focus:ring-0 border-b border-b-background-light w-full"
  disabled={readonly} id="{section.id}" name="{section.id}" bind:value={$form.sections[index].options} rows="1"></textarea>