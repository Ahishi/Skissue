<script lang="ts">
  import { form } from "../../../routes/form/stores";
  export let index
  let section = $form.sections[index]
</script>

<h4 class="font-semibold">{section.title}</h4>
<textarea disabled class="bg-transparent border-x-0 border-t-0 border-b border-background-dark w-full" id="{section.id}" name="{section.id}" rows="1"></textarea>