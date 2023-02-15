<script>
  import FilledForm from "../../components/FilledForm.svelte";
  export let data;
</script>
<div class="flex p-2 flex-wrap gap-x-2">
  {#each data.forms as form}
    <FilledForm {form}/>
  {/each}
</div>