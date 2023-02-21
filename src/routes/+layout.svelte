<script lang="ts">
  import '../app.css';
  import Avatar from "../components/Avatar.svelte";
  export let newGroupMenu = false;

  let navs = [
    {name: "forms", href:"/forms", icon:"description"},
    {name: "history", href:"/", icon:"history"},
  ]
</script>

<div class="flex h-screen">
  <!-- {#if menuOpen}
    <nav class="w-fit top-[0px] left-0 flex pt-1 flex-col gap-y-0.25 h-screen" on:outclick={() => (menuOpen = false)}>
      {#each navs as nav}
        <a class="mx-0.5 pl-[2rem] pr-[8rem] py-0.5 opacity-80 hover:bg-background-dark hover:opacity-100 capitalize transition rounded flex" href="{nav.href}">
          <span class="material-symbols-outlined mr-1">{nav.icon}</span>
          <span>{nav.name}</span>
        </a>
      {/each}
    </nav>
  {/if} -->
  <div class="w-screen relative">
    <nav class="mx-2 h-3 flex relative my-1">
      <button class="absolute left-1 h-full material-symbols-outlined">search</button>
      <input class="h-full rounded w-[32rem] bg-background-dark opacity-80 focus:bg-white focus:text-black px-3 transition outline-none"/>
      <button class="material-symbols-outlined ml-auto opacity-80 transition hover:opacity-100">settings</button>
      <Avatar/>
    </nav>

    <slot />
  </div>

  <aside class="block w-[16rem] bg-background-darker flex flex-col gap-1 overflow-y-auto py-1 shrink-0 select-none relative">

    <button on:click={() => {newGroupMenu = !newGroupMenu}} class="block bg-primary mx-0.5 rounded py-1 font-medium opacity-80 transition hover:opacity-100 flex">
      <span class="material-symbols-outlined mx-1">add</span>
      <span>Group</span>
    </button>

    {#if newGroupMenu}
      <div class="block absolute w-full z-50 px-0.5">
        <div class="overflow-clip rounded bg-background-darker flex flex-col ">
          <button on:click={() => {newGroupMenu = !newGroupMenu}} class="opacity-80 transition hover:opacity-100 py-0.5 px-4 font-medium bg-background-dark">Back</button>
          <button class="opacity-80 transition hover:opacity-100 py-0.5 px-4 font-medium bg-background-dark">Create</button>
          <button class="opacity-80 transition hover:opacity-100 py-0.5 px-4 font-medium bg-background-dark">Join</button>
        </div>
      </div>
    {/if}

    {#each Array(5) as _, index (index)}
      <article class="flex mx-0.5 rounded hover:bg-background-dark opacity-80 py-0.5 px-1">
        <figure class="h-2 my-auto aspect-square bg-primary rounded-full"></figure>
        <div class="my-auto mx-1 pointer-events-none">
          <h2 class="font-medium text-xl">Testgroup</h2>
          <div class="text-sm flex">
            <span class="material-symbols-outlined text-sm mr-0.25">star</span>
            <h4>TestgroupOwner</h4>
          </div>
        </div>
      </article>
    {/each}
  </aside>
</div>