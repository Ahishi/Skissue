<script lang="ts">
  import { getContext } from "svelte";

  const user = getContext("user")
</script>

<a class="opacity-80 hover:bg-background-dark mx-0.5 p-0.5 bg-opacity-80 rounded flex mt-auto" href="/settings">

  <span class="flex mr-1 bg-secondary-10 w-2 h-2 rounded-full aspect-square">
  </span>

  {#if $user}
    <h4 class="my-auto capitalize font-semibold">{$user.displayName}</h4>
  {/if}

  <button
    class="material-symbols-outlined ml-auto"
  >settings</button
  >
</a>