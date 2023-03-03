<script>
  import Contact from "./header/Contact.svelte";

  export let name
  export let contact
</script>

<header class="rounded overflow-clip bg-primary">
  <div class="pb-1 px-2 pb-[2rem] pt-[6rem]">
    <h1 class="text-5xl font-semibold capitalize">{name}</h1>
  </div>

  <Contact contact={contact}/>
</header>