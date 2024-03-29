<script lang="ts">
  import FilledForm from "../../components/FilledForm.svelte";
  import { getContext, onMount } from "svelte";
  import { db } from "../../firebase";
  import { collection, getDocs, query } from "firebase/firestore";
  import EmptyForm from "../../components/EmptyForm.svelte";

  let state: any = getContext("viewState");
  let history: any = getContext("historyState");
  let loadedForms = [];
  let loadedPresets = [];
  const user = getContext("user");

  onMount(async () => {
    while ($user == null) {
      await new Promise(r => setTimeout(r, 50));
    }

    if ($user != null) {
      await loadForms();
      await loadPresets();
    } else {
      console.log("not logged in");
    }
  });

  async function loadPresets() {
    const q = query(collection(db, "users", $user.uid, "presets"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      loadedPresets = [...loadedPresets, doc];
    });
  }

  async function loadForms() {
    const q = query(collection(db, "users", $user.uid, "forms"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      loadedForms = [...loadedForms, doc];
    });
  }

</script>

<section class="relative w-full h-[calc(100%-80px)] overflow-y-auto">

  {#if !$history}

    <!-- Presets Group -->
    {#if $state === 0 || $state === 1}
      <article>
        <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Group Requested</h1>
        <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
          <h4 class="opacity-60 italic text-xm">Nothing here...</h4>
        </div>
      </article>
    {/if}

    <!-- Presets -->
    {#if $state === 0 || $state === 2}
      <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Presets</h1>
      <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
        {#each loadedPresets as form}
          <EmptyForm data={form} />
        {/each}
      </div>
    {/if}

    <a
      href="/preset/new"
      class="fixed z-50 bottom-1 mb-0.5 right-[20rem] bg-secondary-80 rounded py-1 font-medium opacity-80 transition hover:opacity-100 flex w-[15rem]">
      <span class="material-symbols-outlined mx-1">add</span>
      <span>New</span>
    </a>

  {:else}
    <!-- History Group -->
    {#if $state === 0 || $state === 1}
      <article>
        <h1 class="mx-2 py-1 text-4xl title-font opacity-80">Group History</h1>
        <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
          <h4 class="opacity-60 italic text-xm">Nothing here...</h4>
        </div>
      </article>
    {/if}

    <!-- History -->
    {#if $state === 0 || $state === 2}
      <h1 class="mx-2 py-1 text-4xl title-font opacity-80">History</h1>
      <div class="flex px-2 py-1 flex-wrap gap-x-2 w-full">
        {#each loadedForms as form}
          <FilledForm data={form} />
        {/each}
      </div>
    {/if}
  {/if}
</section>