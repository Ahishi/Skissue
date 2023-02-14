<script>
  import FilledForm from "../../components/FilledForm.svelte";
  export let data;
</script>
<div class="flex p-8 gap-x-8">
  {#each data.forms as form}
    <FilledForm {form}/>
  {/each}
</div>