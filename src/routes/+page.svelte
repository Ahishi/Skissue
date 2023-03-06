<script>
	import LoginForm from './LoginForm.svelte';
	import RegisterForm from './RegisterForm.svelte';
	import axios from 'axios';
	import { fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let loaded = false;

	let openLoginOptions = false;
	let login = true;

	let user = {
		email: 'anttiaho01@gmail.com',
		password: 'testuser'
	};

	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

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

	function loginAction() {
		axios
			.post('http://localhost:8080/login', user, config)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
</script>
<main class="hideScroll">
<button
	on:click={() => (openLoginOptions = !openLoginOptions)}
	class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100"
	href="/forms"
	>login
</button>

{#if loaded}
	<div class="centered" in:spin={{ duration: 8000 }} out:fade>
		<span><a href="/forms">SKISSUE</a></span>
    
	</div>
	<div>
		<h1 transition:fly={{ y: 200, duration: 2000, delay: 6000 }} on:transitionstart>
			Antti Aho, Andreas Lang, Jaakko Kuivasniemi
		</h1>
    
	</div>
{/if}

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
					<button
						on:click={() => {
							login = false;
						}}
						type="button"
						class="text-sm opacity-80 hover:opacity-100 transition font-medium"
						>Register
					</button>
				{:else}
					<button
						on:click={() => {
							login = true;
						}}
						type="button"
						class="text-sm opacity-80 hover:opacity-100 transition font-medium"
						>Login
					</button>
				{/if}
				<div class="flex">
					<button
						class="px-1 opacity-80 hover:opacity-100 transition"
						type="reset"
						on:click={() => {
							openLoginOptions = false;
						}}
						>Cancel
					</button>
					<button
						class="rounded-full bg-primary opacity-80 hover:opacity-100 transition py-0.5 px-1 font-medium"
						type="button"
						on:click={loginAction}
						>Login
					</button>
				</div>
			</div>
		</form>
	</section>
{/if}
</main>

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
