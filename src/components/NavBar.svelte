<script lang="ts">
  export let menuOpen = false;

  let navs = [
    {name: "forms", href:"/"},
    {name: "history", href:"/"},
  ]
</script>

<nav class="h-4 w-full flex bg-background-darkest">
  <button on:click={() => menuOpen = !menuOpen} class="h-full aspect-square font-xl material-symbols-outlined opacity-80 hover:opacity-100 transition">
    menu
  </button>
</nav>

{#if menuOpen}
  <nav class="absolute w-fit top-[0px] left-0 flex pt-2 flex-col gap-y-0.25 bg-background-darkest h-screen z-99" on:outclick={() => (menuOpen = false)}>
    {#each navs as nav}
      <a class="mx-0.5 pl-[2rem] pr-[8rem] py-0.5 opacity-80 hover:bg-background-dark hover:opacity-100 capitalize transition rounded" href="{nav.href}">{nav.name}</a>
    {/each}
  </nav>
{/if}