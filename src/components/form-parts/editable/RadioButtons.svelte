<script lang="ts">
  import { form } from "../../../routes/form/stores";

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

<h4 class="font-semibold">{section.title}</h4>
{#each section.options as option, index}
  <div class="flex">
    <input class="disabled:opacity-60 my-auto" name="{section.id}" disabled type="radio" id="{section.id}-{option.id}" bind:value={option.state}>
    <label class="ml-0.5 mr-0.25" for="{section.id}-{option.id}">
      <input class="bg-transparent focus:ring-0 focus:border-white border-x-0 border-t-0 border-b" type="text" value={option.label}>
    </label>
    <!-- Remove button -->
    <button type="button" class="material-symbols-outlined text-lg my-auto opacity-80 hover:opacity-100"
            on:click={() => {deleteOption(index)}}>close
    </button>
  </div>
{/each}
<!-- Section editable add -->
<button on:click={() => addOption()} class="text-left flex opacity-80 hover:opacity-100 w-fit"
        type="button">
  <button class="material-symbols-outlined pointer-events-none text-lg mr-0.25">add</button>
  <span class="h-fit my-auto">Add</span>
</button>