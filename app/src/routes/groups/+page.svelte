<div class="flex flex-row">

    <div class="basis-4/5 px-10 py-5">
        <h1 class="text-3xl font-bold text-gray-600 antialiased mb-5">Group forms</h1>
        <div class="flex flex-col flex-wrap gap-y-5 mb-10">
            {#each data.groups as group}
                <GroupForms group="{group}"/>
            {/each}
        </div>
    </div>
    <div class="basis-1/5 px-10 py-5 min-h-[calc(100vh-65px)] border-l-2">
        <h1 class="text-3xl font-bold text-gray-600 antialiased mb-5">Groups</h1>
        <div class="flex flex-wrap gap-y-5">
            {#each data.groups as group}
                <GroupComponent group={group}/>
            {/each}
        </div>
    </div>
</div>

<script>
    import GroupForms from "./GroupForms.svelte";
    import GroupComponent from "./GroupComponent.svelte";
    export let data;
</script>
