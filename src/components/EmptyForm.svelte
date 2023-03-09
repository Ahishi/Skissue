<script lang="ts">

  export let data: any
  let form = data.data()
</script>

<a href="/preset/{data.id}" class="h-[16rem] w-[12rem] relative opacity-80 hover:opacity-100 transition ease-out pb-1" >
  <div class="bg-background-darker rounded-t p-2 h-full">
  </div>
  <div class="w-[calc(100%+1rem)] absolute bottom-1 -ml-[calc(.5rem)] text-center font-semibold text-white capitalize break-words flex flex-col gap-y-0.25">
    {#if form.group}
      <div class="py-0.25 px-1 rounded" style="background: {form.groupColor}">
        {form.group}
      </div>
    {/if}
    {#if form.creator}
      <div class="py-0.25 px-1 rounded" style="background: {form.groupColor}">
        {form.creator}
      </div>
    {/if}
    <div class="p-1 rounded" style="background: {form.color}">
      {form.name}
    </div>
  </div>
</a>