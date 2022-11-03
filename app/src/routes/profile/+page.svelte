<div class="p-5 flex flex-col gap-5">

    <h1 class="text-2xl font-bold uppercase subpixel-antialiased text-gray-500">Form history</h1>
    <div class="flex flex-wrap gap-10">
        {#each data.profileHistoryForms as form}
            <NewFormPreview form="{form}" color="bg-red-700" icon="person"/>
        {/each}
    </div>

    <h1 class="text-2xl font-bold uppercase subpixel-antialiased text-gray-500">Group form history</h1>
    <div class="flex flex-wrap gap-10">
        {#each data.groupForms as form}
            <NewFormPreview form="{form}" color="bg-blue-700" icon="group"/>
        {/each}
    </div>
</div>

<script>
    import NewFormPreview from "../NewFormPreview.svelte";
    export let data;
</script>
