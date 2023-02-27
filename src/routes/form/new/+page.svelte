<script lang="ts">

  import RadioButtons from "../../../components/form-parts/RadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/SelectBox.svelte";
  import TextArea from "../../../components/form-parts/TextArea.svelte";
  import SelectBoxSmall from "../../../components/form-parts/SelectBoxSmall.svelte";
  import Header from "../../../components/form-parts/Header.svelte";

  export let data;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall },
  ];

  let selectedComponent = components[0];

</script>

<Header name={data.form.name} group={data.form.group} contact={data.form.contact} />

<form class="mt-1 flex flex-col gap-1">

  {#each data.form.sections as section}
    <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <div class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5">
      <svelte:component this={selectedComponent.component} editable={true} {section} />
    </div>
  {/each}

  <div class="opacity-80 hover:opacity-100 bg-background-darker rounded h-4">
    <button class="material-symbols-outlined w-full h-full text-4xl">add</button>
  </div>
</form>