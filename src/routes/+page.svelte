<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
  import { auth } from "../firebase";
  import { signOut} from "firebase/auth";
  import { goto } from "$app/navigation";
  import { getContext } from "svelte";
	import { fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';


  let loaded = false;
  let openLoginOptions = false;
  let loginNotRegister = true;

  async function logOut() {
    await signOut(auth);
    await goto("/");
  }
  onMount(() => {
		loaded = true;
	});
	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);
				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
			}
		};
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
{#if loaded}
	<div class="centered" in:spin={{ duration: 8000 }} out:fade>
		<span><a href="/preset">SKISSUE</a></span>

	</div>
	<div>
		<h1 in:fly={{ y: 200, duration: 2000, delay: 6000 }} on:transitionstart>
			Antti Aho, Andreas Lang, Jaakko Kuivasniemi
		</h1>

	</div>
{/if}
<style>
  .hideScroll::-webkit-scrollbar { display: none; }
	.centered {
		position: absolute;
		left: 50%;
		top: 40vh;
		transform: translate(-50%, -50%);
		color: #a72b63;
		transition: color 3.8s;
	}
	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 15vw;
		font-weight: 600;
		top: 5vh;
		font-family: 'Archivo', sans-serif;
    overflow: clip;
	}
	h1 {
		position: absolute;
		left: 50%;
		top: 65vh;
		transform: translate(-50%, -50%);
		color: #794dff;
	}
</style>
