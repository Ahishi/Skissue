<div class="w-[300px] min-h-150 bg-purple-700 rounded-xl shadow-md hover:shadow-xl flex flex-col text-white">
    <div class="p-5 flex flex-col gap-y-5">
        <h2 class="text-center text-xl font-bold px-10 border-b pb-2.5 border-gray-400 border-opacity-50">{group.title}</h2>
        <p>{group.description}</p>
    </div>
    <div class="mt-auto rounded-b-lg w-full bg-purple-900 box-shadow-lg px-5 py-2.5 flex justify-between">
        <p class="text-sm my-auto font-semibold italic">{group.members}  Members</p>
        <button class="px-4 py-2 h-fit my-auto rounded-full bg-red-600 hover:bg-red-700 text-sm font-semibold uppercase">leave</button>
    </div>
</div>

<script>
    export let group;
</script>
