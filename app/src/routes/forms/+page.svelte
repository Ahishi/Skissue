<div class="p-5 flex flex-col gap-5">

    <h1 class="text-2xl font-bold uppercase subpixel-antialiased text-gray-500">Favourite forms</h1>
    <div class="flex flex-wrap gap-10">
        {#each data.favouriteForms as form}
            <FormViewPreview form="{form}" color="bg-red-700" icon="add"/>
        {/each}
    </div>

    <h1 class="text-2xl font-bold uppercase subpixel-antialiased text-gray-500">Preset marketplace</h1>
    <div class="flex flex-wrap gap-10">
        {#each data.presetForms as form}
            <FormViewPreview form="{form}" color="bg-purple-700" icon="add"/>
        {/each}
    </div>
</div>

<script>
    import FormViewPreview from "../NewFormPreview.svelte";
    export let data;
</script>

