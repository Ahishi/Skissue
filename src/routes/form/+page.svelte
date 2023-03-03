<script lang="ts">

  import RadioButtons from "../../components/form-parts/readonly/RadioButtons.svelte";
  import SelectBox from "../../components/form-parts/readonly/SelectBox.svelte";
  import TextArea from "../../components/form-parts/readonly/TextArea.svelte";
  import SelectBoxSmall from "../../components/form-parts/readonly/SelectBoxSmall.svelte";
  import Header from "../../components/form-parts/readonly/Header.svelte";

  export let data: any;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall },
  ];

  let selectedComponent: any = components[0];

</script>

<Header name={data.form.name} group={data.form.group} contact={data.form.contact} />

<form class="mt-1 flex flex-col gap-1">

  {#each data.form.sections as section}
    <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <article class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5">
      <svelte:component this={selectedComponent.component} readonly={false} {section} />
    </article>
  {/each}

</form>