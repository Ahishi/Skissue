<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let sec = {
    id: null,
    type: "",
    title: "",
    required: false,
    options: []
  };

  export let openNewSegment;

  async function closeNewSegment() {
    dispatch("closeSegment");
  }

  async function addNewSection() {
    dispatch("addSection", {
      sec: sec
    });
    dispatch("closeSegment");
  }
</script>

{#if openNewSegment}
  <form transition:fade={{duration: 150}} on:submit|preventDefault={addNewSection}
        class="fixed mb-1 flex flex-col gap-y-1 bottom-0 z-50 block bg-background-dark p-2 rounded shadow-lg w-full max-w-[96rem] mx-auto">

    <!-- Header -->
    <header class="flex justify-between">
      <!-- Head text -->
      <h4 class="opacity-80 font-semibold">New segment</h4>

      <!-- Required? -->
      <div class="flex">
        <input bind:checked={sec.required} class="rounded-md text-primary my-auto mr-0.5" id="require" type="checkbox" />
        <label class="text-sm my-auto font-medium" for="require">Required</label>
      </div>

    </header>

    <!-- Title -->
    <fieldset class="relative opacity-80 border rounded-lg bg-background-dark bg-opacity-20 overflow-clip">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Title</legend>
      <input bind:value={sec.title} class="bg-transparent outline-0 text-lg py-0.5 px-1 -mt-0.25 w-full" type="text" required />
    </fieldset>

    <div class="flex justify-between">

      <!-- Type -->
      <fieldset class="relative opacity-80 border rounded-lg bg-background-dark bg-opacity-20 overflow-clip w-fit">
        <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Type</legend>
        <select bind:value={sec.type} class="bg-transparent outline-0 text-lg px-1 -mt-0.25 rounded" required>
          <option class="text-black opacity-80 transition hover:bg-background-dark" value="text-area">Text Area</option>
          <option class="text-black opacity-80 transition hover:bg-background-dark" value="radio-buttons">Radio Buttons</option>
          <option class="text-black opacity-80 transition hover:bg-background-dark" value="select-box">Select Box</option>
          <option class="text-black opacity-80 transition hover:bg-background-dark" value="select-box-small">Select Box (compact)</option>
        </select>
      </fieldset>

      <!-- Controls -->
      <footer class="flex h-fit mt-auto">
        <button class="h-fit py-0.5 px-1 opacity-80 transition hover:opacity-100"
                on:click={closeNewSegment} type="button">Cancel
        </button>
        <button class="bg-primary h-fit py-0.5 px-1 rounded-full opacity-80 transition hover:opacity-100" type="submit">Add</button>
      </footer>
    </div>
  </form>
{/if}