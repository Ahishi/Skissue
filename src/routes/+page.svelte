<script>
  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
  import { goto } from "$app/navigation";
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
  import { doc, setDoc } from "firebase/firestore/lite";
  import { auth, db } from "../firebase.js";

  let openLoginOptions = false;
  let login = true;

  let loginUser = {
    username: "Ahishi",
    email: "anttiaho01@gmail.com",
    password: "testuser"
  };

  function sign() {
    if (login) {
      signIn(loginUser.email, loginUser.password);
    } else {
      signUp(loginUser.username, loginUser.email, loginUser.password);
    }
  }

  async function signUp(username, email, password) {
    try {
      let user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user.user, { displayName: username });
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        username: user.user.displayName,
        email: user.user.email
      });
      await goto("/forms");
    } catch (e) {
      console.log("error in SignUp", e);
    }
  }

  async function signIn(email, password) {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), { username: user.user.displayName, email: user.user.email });
      await goto("/forms");
    } catch (error) {
      console.log("error in SignIn", error.message);
    }
  }
</script>

<button on:click={() => openLoginOptions = !openLoginOptions}
        class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100" href="/forms">login
</button>
{#if openLoginOptions}
  <section class="w-fit bg-background-darker rounded fixed top-1 right-1">
    <form class="flex flex-col">
      {#if login}
        <LoginForm />
      {:else}
        <RegisterForm />
      {/if}
      <div class="flex justify-between border-t border-background-dark px-2 py-1">
        {#if login}
          <button on:click={() => {login = false}} type="button"
                  class="text-sm opacity-80 hover:opacity-100 transition font-medium">Register
          </button>
        {:else}
          <button on:click={() => {login = true}} type="button"
                  class="text-sm opacity-80 hover:opacity-100 transition font-medium">Login
          </button>
        {/if}
        <div class="flex">
          <button class="px-1 opacity-80 hover:opacity-100 transition" type="reset"
                  on:click={() => {openLoginOptions = false}}>Cancel
          </button>
          <button class="rounded-full bg-primary opacity-80 hover:opacity-100 transition py-0.5 px-1 font-medium"
                  type="button" on:click={sign}>Login
          </button>
        </div>
      </div>
    </form>
  </section>
{/if}