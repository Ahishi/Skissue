<script>
  export let readonly
  import Contact from "./header/Contact.svelte";
  import { form } from "../../../routes/preset/stores.ts";
</script>

<header class="rounded overflow-clip bg-primary relative">
  <div class="absolute top-1 right-1 flex">
    <button class="px-1 py-0.5 font-medium opacity-80 hover:opacity-100 transition" type="reset">Cancel</button>
    <button class="px-1 py-0.5 bg-secondary-80 opacity-80 hover:opacity-100 transition font-medium rounded-full" type="submit">Ready</button>
  </div>
  <div class="pb-1 px-2 pb-[2rem] pt-[6rem]">
    <input type="text" class="text-5xl font-semibold capitalize bg-transparent opacity-80 focus:opacity-100 focus:ring-0 border-0" bind:value={$form.name}/>
  </div>

  <Contact contact={$form.contact} readonly={readonly}/>
</header>