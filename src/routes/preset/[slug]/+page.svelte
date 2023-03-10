<script lang="ts">
  import { addDoc, collection, doc, getDoc } from "firebase/firestore";
  import RadioButtons from "../../../components/form-parts/readonly/RadioButtons.svelte";
  import SelectBox from "../../../components/form-parts/readonly/SelectBox.svelte";
  import TextArea from "../../../components/form-parts/readonly/TextArea.svelte";
  import SelectBoxSmall from "../../../components/form-parts/readonly/SelectBoxSmall.svelte";
  import Header from "../../../components/form-parts/readonly/Header.svelte";

  import { form } from "../stores.ts";
  import { auth, db } from "../../../firebase";
  import { getContext, onMount } from "svelte";
  import { goto } from "$app/navigation";

  /** @type {import("../../../../.svelte-kit/types/src/routes").PageData} */
  export let data;

  //Components that can be used
  const components = [
    { type: "radio-buttons", component: RadioButtons },
    { type: "select-box", component: SelectBox },
    { type: "text-area", component: TextArea },
    { type: "select-box-small", component: SelectBoxSmall }
  ];

  let selectedComponent: any = components[0];

  //Get user data from store
  const user = getContext("user")

  //Load form on component mount lifecycle
  onMount(async () => {
    await loadForm()
  })

  async function loadForm() {

    //Wait until user is loaded (loads after mount for some reason??)
    while ($user == null) {
      await new Promise(r => setTimeout(r, 50))
    }

    //Get preset from a user
    try{
      const docRef = doc(db, "users", $user.uid , "presets", data.slug);
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

  async function onSubmit(){
    //Submit a form from store to users forms folder
    if ($user.uid) {
      const ref = collection(db, "users", $user.uid, "forms")
      await addDoc(ref, $form)
      //Reroute to forms
      await goto("/forms")
    }
  }

</script>

<form class="mt-1 flex flex-col gap-1" on:submit|preventDefault={onSubmit}>
  <!-- Header for form -->
  <Header name={$form.name} group={$form.group} contact={$form.contact} readonly={false} />

  {#each $form.sections as section, index}
    <span
      class="invisible absolute">{ selectedComponent = components.find(comp => comp.type === section.type) }</span>
    <article
      class="rounded overflow-clip w-full z-10 opacity-80 p-2 flex flex-col gap-y-0.5 bg-background-darker rounded mr-0.5">
      <svelte:component this={selectedComponent.component} readonly={false} index="{index}" /> <!-- Load custom svelte component from list -->
    </article>
  {/each}

</form>