<script lang="ts">
  import RadioButtons from "../../components/form-parts/RadioButtons.svelte";
  import SelectBox from "../../components/form-parts/SelectBox.svelte";
  import TextArea from "../../components/form-parts/TextArea.svelte";
  import Contact from "../../components/form-parts/header/Contact.svelte";

  export let data;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
  ];

  let selectedComponent = components[0];

</script>

<div class="bg-primary px-2 py-4 rounded">
  <h1 class="text-5xl font-semibold capitalize">{data.form.name}</h1>
  {#if data.form.group}
    <h4 class="text-xl font-medium capitalize">{data.form.group}</h4>
  {/if}
</div>

<form class="mt-1 flex flex-col gap-1">

  <Contact contact={data.form.group}/>

  {#each data.form.sections as section}
    <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <div class="opacity-80 bg-background-darker rounded flex flex-col gap-y-0.5 p-2 w-full z-10">
      <svelte:component this={selectedComponent.component} {section} />
    </div>
  {/each}

</form>