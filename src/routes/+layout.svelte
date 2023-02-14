<script lang="ts">
  export let menuOpen = false;
</script>

<div class="min-h-screen">
  <nav class="h-[65px] w-full flex bg-background">
    <button on:click={() => menuOpen = !menuOpen} class="h-full px-4 text-text font-semibold uppercase flex material-symbols-outlined hover:text-white hover:scale-105 transition duration-150">
      menu
    </button>
  </nav>
  {#if menuOpen}
    <div class="flex h-full w-full z-10 top-0 absolute">
      <nav class="bg-background border-r-text flex flex-col min-w-[400px] rounded-r-xl">
        <a class="py-4 font-semibold px-4 text-text capitalize" href="/">Skissue</a>
        <div class="mx-2">
          <a class="py-4 pl-4 text-text font-semibold capitalize flex hover:bg-background-lighter rounded-full transition duration-150" href="/forms">
            <span class="material-symbols-outlined">description</span>
            <span class="my-auto h-fit ml-4">Forms</span>
          </a>
          <a class="py-4 pl-4 text-text font-semibold capitalize flex hover:bg-background-lighter rounded-full transition duration-150" href="/history">
            <span class="material-symbols-outlined">history</span>
            <span class="my-auto h-fit ml-4">History</span>
          </a>
          <a class="py-4 pl-4 text-text font-semibold capitalize flex hover:bg-background-lighter rounded-full transition duration-150" href="/groups">
            <span class="material-symbols-outlined">group</span>
            <span class="my-auto h-fit ml-4">Presets</span>
          </a>
        </div>
        <hr class="border-text my-2 mx-4">
        <div class="mx-2">
          <a class="py-4 pl-4 text-text font-semibold capitalize flex hover:bg-background-lighter rounded-full transition duration-150" href="/settings">
            <span class="material-symbols-outlined">settings</span>
            <span class="my-auto h-fit ml-4">Settings</span>
          </a>
        </div>
      </nav>
      <div on:click={() => {menuOpen = !menuOpen}} class="bg-black block h-full w-full opacity-25"></div>
    </div>
  {/if}
  <slot />
</div>