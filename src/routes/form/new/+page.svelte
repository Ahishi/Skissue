<script lang="ts">

  import RadioButtons from "../../../components/form-parts/RadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/SelectBox.svelte";
  import TextArea from "../../../components/form-parts/TextArea.svelte";
  import Review from "../../../components/form-parts/Review.svelte";

  export let data;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "review", component: Review }
  ];

  let selectedComponent = components[0];

</script>

<div class="bg-primary px-2 py-4 rounded">
  <h1 class="text-5xl font-semibold capitalize">{data.form.name}</h1>
  {#if data.form.group}
    <h4 class="text-xl font-medium capitalize">{data.form.group}</h4>
  {/if}
</div>

<div class="mt-1 flex flex-col gap-1">
  {#each data.form.sections as section}
    <div class="flex bg-background-darker rounded overflow-clip">
      <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
      <div class="opacity-80 flex flex-col gap-y-0.5 p-2 w-full z-10">
        <svelte:component this={selectedComponent.component} {section} />
      </div>
      <button class="material-symbols-outlined h-full w-4 bg-error block">close</button>
    </div>
  {/each}

  <div class="opacity-80 hover:opacity-100 bg-background-darker rounded">
    <button class="material-symbols-outlined w-full p-1 text-4xl">add</button>
  </div>
</div>

<!-- <SelectBox/>
<RadioButtons/>
<TextArea/>
<TextField/>
<Review/> -->