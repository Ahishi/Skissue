<script>
  import Contact from "../editable/header/Contact.svelte";

  export let name
  export let group
  export let contact
  export let readonly
</script>

<header class="rounded overflow-clip bg-primary relative">
  {#if !readonly}
    <div class="absolute top-1 right-1 flex">
      <button class="px-1 py-0.5 font-medium opacity-80 hover:opacity-100 transition" type="reset">Cancel</button>
      <button class="px-1 py-0.5 bg-secondary-80 opacity-80 hover:opacity-100 transition font-medium rounded-full" type="submit">Ready</button>
    </div>
  {/if}
  <div class="pb-1 px-2 pb-[2rem] pt-[6rem]">
    <h1 class="text-5xl font-semibold capitalize">{name}</h1>
    {#if group}
      <h4 class="text-xl font-medium capitalize">{group}</h4>
    {/if}
  </div>

  <Contact contact={contact} readonly={readonly}/>
</header>