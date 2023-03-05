<script lang="ts">
  export let section; //section JSON prop

  //Function for adding an option to the JSON document
  function addOption() {
    section.options = [...section.options,
      {
        id: section.options.last_index++,
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
    section.options = [...section.options.slice(0, index), ...section.options.slice(index + 1)];
  }
</script>

<!-- Section title -->
<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<!-- Section body -->
{#each section.options as option, index}
  <div class="flex">

    <!-- Checkbox -->
    <input class="my-auto rounded-md disabled:opacity-60 text-primary" type="checkbox" id="{section.id}-{option.id}" disabled bind:value={option.state}
           checked={option.state}>

    <!-- Label -->
    <label class="ml-0.25">
      <input class="bg-transparent focus:border-white focus:ring-0 border-x-0 border-t-0 border-b" type="text" value={option.label}>
    </label>

    <!-- Textfield choice -->
    <label class="italic text-xs opacity-80 my-auto ml-0.5">(Includes textfield?)</label>
    <input class="ml-1 mr-0.5 text-primary rounded-md my-auto" type="checkbox" bind:value={option.inputField} checked={option.inputField}>

    <!-- Remove button -->
    <button type="button" class="material-symbols-outlined my-auto text-lg my-auto opacity-80 hover:opacity-100"
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