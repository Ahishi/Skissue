<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
  import { auth } from "../firebase";
  import { signOut} from "firebase/auth";
  import { goto } from "$app/navigation";
  import { getContext } from "svelte";


  let openLoginOptions = false;
  let loginNotRegister = true;

  async function logOut() {
    await signOut(auth);
    await goto("/");
  }

</script>

<!--{#if $session['user'] != null}
  <button on:click={() => openLoginOptions = !openLoginOptions}
          class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100">login
  </button>
{:else}
  <button on:click={logOut()}
          class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100">logout
  </button>
{/if} -->
<button on:click={() => openLoginOptions = !openLoginOptions}
        class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100">login
</button>
{#if openLoginOptions}
  <section class="w-fit bg-background-darker rounded fixed top-1 right-1">
    {#if loginNotRegister}
      <LoginForm on:changeType={() => {loginNotRegister = !loginNotRegister}}
                 on:cancel={() => {openLoginOptions = false}} />
    {:else}
      <RegisterForm on:changeType={() => {loginNotRegister = !loginNotRegister}}
                    on:cancel={() => {openLoginOptions = false}} />
    {/if}
  </section>
{/if}