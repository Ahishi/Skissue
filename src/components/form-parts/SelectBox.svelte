<script lang="ts">
  export let section; //section JSON prop
  export let editable: boolean; //is editable?
  export let readonly = editable; //is Read-only?

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
  <div>

    <!-- Checkbox -->
    <input type="checkbox" id="{section.id}-{option.id}" disabled={readonly} bind:value={option.state}
           checked={option.state}>

    <!-- Label -->
    {#if editable}
      <label class="ml-0.25">
        <input class="bg-transparent outline-0 border-b" type="text" value={option.label}>
      </label>
    {:else}
      <label for="{section.id}-{option.id}"> {option.label} </label>
    {/if}

    <!-- Add-on textfield -->
    {#if option.inputField && !editable}
      <!-- Displayed textfield -->
      <input type="text" class="ml-0.5 border-b border-b-white px-0.5 bg-transparent focus:outline-none"
             bind:value={option.inputText}>
    {:else if editable}

      <!-- Textfield choice -->
      <label class="italic text-xs opacity-80 my-auto ml-0.5">(Includes textfield?)</label>
      <input class="ml-0.5" type="checkbox" bind:value={option.inputField} checked={option.inputField}>

      <!-- Remove button -->
      <button type="button" class="material-symbols-outlined text-sm my-auto opacity-80 hover:opacity-100"
              on:click={() => {deleteOption(index)}}>close
      </button>
    {/if}

  </div>
{/each}

<!-- Section editable add -->
{#if editable}
  <button on:click={() => addOption()} class="text-left flex opacity-80 hover:opacity-100 w-fit"
          type="button">
    <span class="material-symbols-outlined text-sm my-auto">add</span>
    <span class="ml-0.25 text-sm">Add</span>
  </button>
{/if}