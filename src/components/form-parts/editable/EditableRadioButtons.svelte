<script lang="ts">
  import { form } from "../../../routes/form/stores";

  export let index

  //Function for adding an option to the JSON document
  function addOption() {
    $form.sections[index].options = [...$form.sections[index].options,
      {
        id: $form.sections[index].options.last_index++,
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
    $form.sections[index].options = [...$form.sections[index].options.slice(0, index), ...$form.sections[index].options.slice(index + 1)];
  }
</script>

<h4 class="font-semibold">{$form.sections[index].title}</h4>
{#each $form.sections[index].options as option, index}
  <div class="flex">
    <input class="disabled:opacity-60 my-auto" name="{$form.sections[index].id}" disabled type="radio" id="{$form.sections[index].id}-{option.id}" bind:value={option.state}>
    <label class="ml-0.5 mr-0.25" for="{$form.sections[index].id}-{option.id}">
      <input class="bg-transparent focus:ring-0 focus:border-white border-x-0 border-t-0 border-b" type="text" bind:value={$form.sections[$form.sections[index].id].options[index].label}>
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