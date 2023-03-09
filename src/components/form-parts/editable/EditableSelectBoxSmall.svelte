<script lang="ts">
  import { form } from "../../../routes/preset/stores";

  export let index
  let section = $form.sections[index]

  //Function for adding an option to the JSON document
  function addOption() {
    section["options"] = [...section["options"],
      {
        id: section["options"].last_index++,
        label: "",
        state: false,
        inputField: false,
        inputText: ""
      }
    ];
  }

  //Function for removing an option from the JSON document
  function deleteOption(index: number) {
    console.log(index);
    section["options"] = [...section["options"].slice(0, index), ...section["options"].slice(index + 1)];
  }
</script>

<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<div class="flex">
  {#each section.options as option, index}
    <input class="my-auto rounded-md disabled:opacity-60" type="checkbox" disabled id="{section.id}-{option.id}" bind:value={option.state}>
    <label class="ml-0.5 mr-0.25" for="{section.id}-{option.id}">
      <input class="bg-transparent focus:border-white focus:ring-0 border-x-0 border-t-0 border-b" size="10" type="text" bind:value={$form.sections[section.id].options[index].label}>
    </label>
    <!-- Remove button -->
    <button type="button" class="material-symbols-outlined text-lg my-auto opacity-80 hover:opacity-100 mr-1"
            on:click={() => {deleteOption(index)}}>close
    </button>
  {/each}
  <!-- Section editable add -->
  <button on:click={() => addOption()} class="text-left flex opacity-80 hover:opacity-100 w-fit"
          type="button">
    <button class="material-symbols-outlined pointer-events-none text-lg mr-0.25">add</button>
    <span class="h-fit my-auto">Add</span>
  </button>
</div>