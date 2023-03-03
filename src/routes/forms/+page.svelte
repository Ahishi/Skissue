<script lang="ts">
  import FilledForm from "../../components/FilledForm.svelte";
  import { getContext } from "svelte";

  let state:any = getContext("viewState");

  export let data: any
</script>

<section class="relative w-full h-[calc(100%-80px)]">

  {#if $state === 0 || $state === 1}
    <article>
      <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Group Requested</h1>
      <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
        {#each data.forms as form}
          <FilledForm {form} />
        {/each}
      </div>
    </article>
  {/if}

  {#if $state === 0 || $state === 2}
    <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Presets</h1>
    <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
      {#each data.forms as form}
        <FilledForm {form} />
      {/each}
    </div>
  {/if}

  <a
    href="/form/new"
    class="absolute bottom-1 right-2 bg-secondary-80 rounded py-1 font-medium opacity-80 transition hover:opacity-100 flex w-[15rem]">
    <span class="material-symbols-outlined mx-1">add</span>
    <span>New</span>
  </a>
</section>