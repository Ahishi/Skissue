<script lang="ts">
  export let form
</script>

<div class="h-[250px] w-[200px] relative hover:scale-105 transition duration-150 ease-out">
  <div class="bg-background rounded-t-xl p-8">
    <div class="h-2 rounded-full bg-background-lighter w-1/2"></div>
    <div class="h-2 rounded-full bg-background-lighter mt-2"></div>
    <div class="h-2 rounded-full bg-background-lighter mt-2 w-2/3"></div>
    <div class="h-2 rounded-full bg-background-lighter mt-2"></div>
    <div class="h-2 mt-8 rounded-full bg-background-lighter w-1/2"></div>
    <div class="h-2 rounded-full bg-background-lighter mt-2"></div>
    <div class="h-2 rounded-full bg-background-lighter mt-2 w-2/3"></div>
  </div>
  <div class="w-[calc(100%+1rem)] absolute bottom-0 -ml-[calc(.5rem)] py-4 rounded-xl px-4 text-center font-semibold text-white capitalize break-words" style="background: {form.color}">{form.name}</div>
</div>