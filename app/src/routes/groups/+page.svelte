<h1>Groups</h1>
<div class="flex flex-wrap gap-x-5 py-10 px-5">
    {#each data.groups as group}
        <GroupComponent group={group}/>
    {/each}
</div>

<script>
    import GroupComponent from "./GroupComponent.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>
