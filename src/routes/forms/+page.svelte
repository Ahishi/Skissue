<script>
  import FilledForm from "../../components/FilledForm.svelte";
  export let data;
</script>

<section class="relative w-full">

  <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Group Forms</h1>
  <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
    {#each data.forms as form}
      <FilledForm {form}/>
    {/each}
  </div>

  <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Personal Presets</h1>
  <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
    {#each data.forms as form}
      <FilledForm {form}/>
    {/each}
  </div>

  <button class="absolute bottom-1 right-[0px] mx-0.5 bg-secondary-80 rounded py-1 font-medium opacity-80 transition hover:opacity-100 flex w-[15rem]">
    <span class="material-symbols-outlined mx-1">add</span>
    <span>New</span>
  </button>
</section>

<style>
    .material-symbols-outlined {
        font-variation-settings:
                'FILL' 1,
                'wght' 400,
                'GRAD' 0,
                'opsz' 48
    }
</style>