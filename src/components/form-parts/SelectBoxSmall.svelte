<script lang="ts">
  export let section
  export let editable = true

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
</script>

<div class="flex">
  <h4 class="font-semibold">{section.title}</h4>
  <small class="italic text-xs opacity-80 my-auto ml-0.5">(Check all that apply)</small>
</div>

<div class="flex">
  {#each section.options as option}
    <input type="checkbox" id="{section.id}-{option.id}" bind:value={option.state}>
    <label class="ml-0.5 mr-1" for="{section.id}-{option.id}"> {option.label} </label>
  {/each}
  <!-- Section editable add -->
  {#if editable}
    <button on:click={() => addOption()} class="text-left flex opacity-80 hover:opacity-100 w-fit"
            type="button">
      <span class="material-symbols-outlined text-sm my-auto">add</span>
      <span class="ml-0.25 text-sm">Add</span>
    </button>
  {/if}
</div>