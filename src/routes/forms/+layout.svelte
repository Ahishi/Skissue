<script lang="ts">
	import Avatar from "../../components/helpers/Avatar.svelte";
	import Search from "./Search.svelte";

	import { getContext, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { fade } from "svelte/transition";
	import { addDoc } from "firebase/firestore/lite";
	import { auth, groupCollection } from "../../firebase";

	let viewState = writable(0);
	let historyState = writable(false);
	setContext("historyState", historyState);
	setContext("viewState", viewState);
	const user = getContext("user");

	function clickOutside(element: any, callbackFunction: any) {
		function onClick(event: any) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener("click", onClick);

		return {
			update(newCallbackFunction: any) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	const group = {
		name: "Coolgroup",
		color: "#fffff",
		owner: auth.currentUser?.uid,
		presets: [],
		forms: [],
		members: []
	}

	async function createNewGroup() {
		await addDoc(groupCollection, group)
	}

	function handleMouseOver() {
		newGroupMenu = true;
	}
	function handleMouseOut() {
		newGroupMenu = false;
	}

	let newGroupMenu = false;
	let openGroup = false;
</script>

<div class="flex h-screen">
	<div class="w-screen relative">
		<nav class="mx-2 h-3 flex relative my-1">
			<!-- Form search -->
			<Search/>
			<!-- Segmented button for All/Group/Personal selection -->
			<div class="flex rounded-full opacity-80 border overflow-clip mx-1 my-0.25 text-sm">
				<button
					on:click={() => ($viewState = 0)}
					class="w-[7rem] border-r bg-secondary-80 bg-opacity-0 hover:bg-opacity-80 transition"
					>All
				</button>
				<button
					on:click={() => ($viewState = 1)}
					class="w-[7rem] bg-secondary-80 bg-opacity-0 hover:bg-opacity-80 transition"
					>Group
				</button>
				<button
					on:click={() => ($viewState = 2)}
					class="w-[7rem] border-l bg-secondary-80 bg-opacity-0 hover:bg-opacity-80 transition"
					>Personal
				</button>
			</div>

			<!-- Segmented button for New/History selection -->
			<div class="flex rounded-full opacity-80 border overflow-clip my-0.25 text-sm ml-auto">
				<button
					on:click={() => {$historyState = false}}
					class="w-[7rem] border-r bg-secondary-80 bg-opacity-0 hover:bg-opacity-80 transition"
				>New
				</button
				>
				<button
					on:click={() => {{$historyState = true}}}
					class="w-[7rem] bg-secondary-80 bg-opacity-0 hover:bg-opacity-80 transition"
				>History
				</button
				>
			</div>
		</nav>

		<slot />
	</div>

	{#if openGroup}
		<div
			transition:fade={{ duration: 150 }}
			class="absolute z-50 flex flex-col w-[24rem] right-[17rem] py-1 pl-1 pr-0.5 h-full top-0"
			use:clickOutside={() => {
				openGroup = false;
			}}
		>
			<div class="bg-background-darker relative h-full w-full rounded">
				<article class="flex rounded bg-secondary-80 opacity-80 py-0.5 mb-1 h-[12rem]">
					<div class="mt-auto mb-0.5 mx-2 pointer-events-none ">
						<h1 class="font-medium text-2xl">Testgroup</h1>
						<p class="text-xs">11.11.2023</p>
					</div>
				</article>

				{#each Array(8) as _, index (index)}
					<article class="flex mx-1 rounded hover:bg-background-dark opacity-80 py-0.5 px-1">
						<figure class="h-2 my-auto aspect-square bg-primary rounded-full" />
						<h2 class="font-medium my-auto mx-1 pointer-events-none">Testmember</h2>
					</article>
				{/each}

				<section class="absolute bottom-1 w-full px-1">
					<button
						class="block bg-error w-full rounded py-1 font-medium opacity-80 transition hover:opacity-100 flex"
					>
						<span class="material-symbols-outlined mx-1">logout</span>
						<span>Leave</span>
					</button>
				</section>
			</div>
		</div>
	{/if}

	<aside
		class="block w-[16rem] bg-background-darker flex flex-col gap-1 overflow-y-auto py-1 shrink-0 select-none relative rounded m-1"
	>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<button
			class="block mx-1 rounded font-medium transition flex overflow-clip {newGroupMenu
				? ''
				: 'bg-primary opacity-80'}"
			on:mouseover={handleMouseOver}
		>
			{#if newGroupMenu}
				<div class="w-full flex" on:mouseleave={handleMouseOut}>
					<button class="w-1/2 py-1 opacity-80 hover:opacity-100 font-medium transition bg-primary"
						>Join</button
					>
					<button on:click={createNewGroup} class="w-1/2 py-1 opacity-80 hover:opacity-100 font-medium transition bg-primary"
						>Create</button
					>
				</div>
			{:else}
				<span class="material-symbols-outlined mx-1 py-1">add</span>
				<span class="py-1">Group</span>
			{/if}
		</button>

		{#each Array(5) as _, index (index)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<article
				class="flex mx-0.5 rounded hover:bg-background-dark opacity-80 py-0.5 px-1"
				on:click={(event) => {
					openGroup = true;
					event.stopPropagation();
				}}
			>
				<figure class="h-2 my-auto aspect-square bg-primary rounded-full"> </figure>
				<div class="my-auto mx-1 pointer-events-none">
					<h2 class="font-medium">Testgroup</h2>
					<h4 class="text-xs opacity-80">members 8</h4>
				</div>
			</article>
		{/each}

		<!-- Setting Controls -->
		<Avatar />
	</aside>
</div>
