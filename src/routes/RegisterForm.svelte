<script>
  import { createEventDispatcher } from 'svelte';
  import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
  import { auth, db } from "../firebase.js";
  import { doc, setDoc } from "firebase/firestore";
  import { goto } from "$app/navigation";
  const dispatch = createEventDispatcher();

  let registerUser = {
    username: "",
    email: "",
    password: ""
  }

  //Sign Up Google
  async function signUp() {
    try {
      let user = await createUserWithEmailAndPassword(
        auth,
        registerUser.email,
        registerUser.password
      );
      await updateProfile(user.user, { displayName: registerUser.username });
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        username: user.user.displayName,
        email: user.user.email
      });
      await goto("/forms");
    } catch (e) {
      console.log("error in SignUp", e);
    }
  }

</script>

<form class="flex flex-col" on:submit|preventDefault={signUp}>

  <!-- Title -->
  <h4 class="px-2 mt-2 opacity-80 font-medium">Register</h4>

  <!-- Inputs -->
  <div class="px-2 pt-1 pb-2 gap-y-1 flex flex-col opacity-80">
    <fieldset class="border rounded-lg bg-opacity-20 overflow-clip">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Email</legend>
      <input class="bg-transparent outline-0 py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" bind:value={registerUser.username} type="text" required />
    </fieldset>
    <fieldset class="border rounded-lg bg-opacity-20 overflow-clip">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Email</legend>
      <input class="bg-transparent outline-0 py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" bind:value={registerUser.email} type="email" required />
    </fieldset>
    <fieldset class="border rounded-lg bg-opacity-20 overflow-clip">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Password</legend>
      <input class="bg-transparent outline-0 py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" bind:value={registerUser.password} type="password" required />
    </fieldset>
  </div>

  <!-- Footer -->
  <footer class="flex justify-between border-t border-background-dark px-2 py-1">
    <!-- Change between Login/Register -->
    <button on:click={() => {dispatch('changeType')}} type="button"
            class="text-sm opacity-80 hover:opacity-100 transition font-medium">Login
    </button>

    <!-- Go/Cancel -->
    <div class="flex">
      <button class="px-1 opacity-80 hover:opacity-100 transition" type="reset"
              on:click={() => {dispatch('cancel')}}>Cancel
      </button>
      <button class="rounded-full bg-primary opacity-80 hover:opacity-100 transition py-0.5 px-1 font-medium"
              type="submit">Register
      </button>
    </div>
  </footer>
</form>