<script lang="ts">

  import RadioButtons from "../../../components/form-parts/editable/EditableRadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/editable/EditableSelectBox.svelte";
  import TextArea from "../../../components/form-parts/editable/EditableTextArea.svelte";
  import SelectBoxSmall from "../../../components/form-parts/editable/EditableSelectBoxSmall.svelte";
  import Header from "../../../components/form-parts/editable/EditableHeader.svelte";
  import NewSegment from "./NewSegment.svelte";

  import { addDoc, collection } from "firebase/firestore";
  import { auth, db } from "../../../firebase";
  import { goto } from "$app/navigation";
  import { form } from "../stores.ts";

  let openNewSegment = false;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall }
  ];

  let selectedComponents = [];

  async function deleteSection(index: number){
    $form.sections = [...$form.sections.slice(0, index), ...$form.sections.slice(index + 1)];
  }

  const addSection = (event) => {
    $: console.log($form.sections)
    let sec = event.detail.sec;
    $form.sections = [...$form.sections, Object.assign({}, sec)];
    $form.sections.forEach((currentValue, index) => {
      console.log(index);
      $form.sections[index].id = index;
    });
  }

  async function onSubmit(){
    const uid = auth.currentUser?.uid
    if (uid) {
      const ref = collection(db, "users", uid, "presets")
      await addDoc(ref, $form)
      await goto("/forms")
    }
  }

</script>

<form class="mt-1 flex flex-col gap-1 relative" on:submit|preventDefault={onSubmit}>
  <Header name={$form.name} group={$form.group} contact={$form.contact} readonly={true} />
  {#each $form.sections as section, index}
    <span class="invisible absolute">{selectedComponents[index] = components.find(comp => comp.type === section.type)}</span>
    <div
      class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5 relative">
      <svelte:component this={selectedComponents[index].component} index={index} />
      <!-- Section delete -->
      <button on:click={() => deleteSection(section.id)}
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