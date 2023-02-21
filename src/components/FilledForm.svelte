<script lang="ts">
  export let form
</script>

<div class="h-[16rem] w-[12rem] relative opacity-80 hover:opacity-100 transition ease-out">
  <div class="bg-background-darker rounded-t p-2">
    <div class="h-0.5 rounded-full bg-background-dark w-1/2"></div>
    <div class="h-0.5 rounded-full bg-background-dark mt-0.5"></div>
    <div class="h-0.5 rounded-full bg-background-dark mt-0.5 w-2/3"></div>
    <div class="h-0.5 rounded-full bg-background-dark mt-0.5"></div>
    <div class="h-0.5 mt-2 rounded-full bg-background-dark w-1/2"></div>
    <div class="h-0.5 rounded-full bg-background-dark mt-0.5"></div>
    <div class="h-0.5 rounded-full bg-background-dark mt-0.5 w-2/3"></div>
  </div>
  <div class="w-[calc(100%+1rem)] absolute bottom-1 -ml-[calc(.5rem)] py-1 rounded px-1 text-center font-semibold text-white capitalize break-words" style="background: {form.color}">{form.name}</div>
</div>