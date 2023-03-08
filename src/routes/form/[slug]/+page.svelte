<script lang="ts">
  import { doc, getDoc } from "firebase/firestore";
  import RadioButtons from "../../../components/form-parts/readonly/RadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/readonly/SelectBox.svelte";
  import TextArea from "../../../components/form-parts/readonly/TextArea.svelte";
  import SelectBoxSmall from "../../../components/form-parts/readonly/SelectBoxSmall.svelte";
  import Header from "../../../components/form-parts/readonly/Header.svelte";

  import { form } from "../stores.ts";
  import { auth, db } from "../../../firebase";
  import { getContext, onMount } from "svelte";

  /** @type {import("./$types").PageData} */
  export let data;

  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall }
  ];

  let selectedComponent: any = components[0];
  const user = getContext("user")

  onMount(async () => {
    await loadForm()
  })

  async function loadForm() {
    try{
      console.log("users/" + "NF35baMoVva1xtQ8WjVPF8hNtZt1" + "/presets/" + data.slug)
      const docRef = doc(db, "users", "NF35baMoVva1xtQ8WjVPF8hNtZt1" , "presets", data.slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        $form = docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.log(e)
    }
  }

</script>

<Header name={$form.name} group={$form.group} contact={$form.contact} />

<form class="mt-1 flex flex-col gap-1">

  {#each $form.sections as section, index}
    <span
      class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <article
      class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5">
      <svelte:component this={selectedComponent.component} readonly={false} index="{index}" />
    </article>
  {/each}

</form>