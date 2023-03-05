<script lang="ts">
  import { term } from './stores.ts';
  let val = '';

  $: term.set(val);

</script>

<button class="absolute left-1 h-full material-symbols-outlined">search</button>
<input
  id="searchInput"
  type="search"
  placeholder="Search"
  bind:value={val}
  class="h-full rounded-full w-[32rem] bg-background-dark opacity-80 focus:bg-white focus:text-black px-3 transition outline-none"
/>