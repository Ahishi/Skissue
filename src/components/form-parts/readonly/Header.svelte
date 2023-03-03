<script>
  import Contact from "./header/Contact.svelte";

  export let name
  export let group
  export let contact
</script>

<header class="rounded overflow-clip bg-primary">
  <div class="pb-1 px-2 pb-[2rem] pt-[6rem]">
    <h1 class="text-5xl font-semibold capitalize">{name}</h1>
    {#if group}
      <h4 class="text-xl font-medium capitalize">{group}</h4>
    {/if}
  </div>

  <Contact contact={contact}/>
</header>