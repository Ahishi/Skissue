<script lang="ts">

  import RadioButtons from "../../../components/form-parts/editable/RadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/editable/SelectBox.svelte";
  import TextArea from "../../../components/form-parts/editable/TextArea.svelte";
  import SelectBoxSmall from "../../../components/form-parts/editable/SelectBoxSmall.svelte";
  import Header from "../../../components/form-parts/editable/Header.svelte";
  import NewSegment from "./NewSegment.svelte";

  export let data;
  let form = data.form;
  let openNewSegment = false;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall },
  ];

  let selectedComponent = components[0];

  function deleteSection(index: number){
    console.log(index);
    form.sections = [...form.sections.slice(0, index), ...form.sections.slice(index + 1)];
  }

  function addSection(event){
    let newSection = event.detail.section;
    newSection.id  = form.sections.length;
    console.log(newSection)
    form.sections = [...form.sections, newSection]
  }

</script>

<Header name={form.name} group={form.group} contact={form.contact} />

<form class="mt-1 flex flex-col gap-1 relative">
  {#each form.sections as section, index}
    <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <div
      class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5 relative">
      <svelte:component this={selectedComponent.component} {section} />
      <!-- Section delete -->
      <button on:click={() => deleteSection(index)}
              class="flex opacity-80 hover:opacity-100 w-fit absolute right-1 top-1 material-symbols-outlined"
              type="button">
        delete
      </button>
    </div>
  {/each}

  <NewSegment on:addSection={addSection} on:closeSegment={() => {openNewSegment = false}} openNewSegment={openNewSegment}/>

  <div class="opacity-80 hover:opacity-100 bg-background-darker rounded h-4">
    <button on:click={() => {openNewSegment = true}} type="button"
            class="material-symbols-outlined w-full h-full text-4xl">add
    </button>
  </div>
</form>