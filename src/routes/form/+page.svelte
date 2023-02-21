<script lang="ts">
  import RadioButtons from "../../components/form-parts/RadioButtons.svelte";
  import SelectBox from "../../components/form-parts/SelectBox.svelte";
  import TextArea from "../../components/form-parts/TextArea.svelte";
  import TextField from "../../components/form-parts/TextField.svelte";
  import Review from "../../components/form-parts/Review.svelte";

  export let data;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "text-field", component: TextField },
    { type: "review", component: Review }
  ];

  let selectedComponent = components[0];

</script>

<article class="flex flex-col gap-1 mx-2">
  <div class="bg-primary px-2 py-4 rounded">
    <h1 class="text-5xl font-semibold capitalize">{data.form.name}</h1>
    {#if data.form.group}
      <h4 class="text-xl font-medium capitalize">{data.form.group}</h4>
    {/if}
  </div>
{#each data.form.sections as section}
  <span class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
  <svelte:component this={selectedComponent.component} {section} />
{/each}
</article>

<!-- <SelectBox/>
<RadioButtons/>
<TextArea/>
<TextField/>
<Review/> -->