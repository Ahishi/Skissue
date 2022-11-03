<button on:click={toggle} class="w-fit">
    <h1 class="text-2xl font-bold uppercase subpixel-antialiased text-gray-500">{group.title} forms
        <span class="material-symbols-outlined">
            {#if !groupOpen} expand_more {/if}
            {#if groupOpen} expand_less {/if}
        </span>
    </h1>
</button>
{#if groupOpen}
    <div class="flex flex-wrap gap-10">
        {#each group.groupForms as form}
            <NewFormPreview form="{form}" color="bg-blue-700" icon="group"/>
        {/each}
    </div>
{/if}

<script>
    import NewFormPreview from "../NewFormPreview.svelte";
    export let group;
    export let groupOpen = true;

    function toggle() {
        groupOpen = !groupOpen;
    }
</script>
