<script lang="ts">
  export let contact
</script>

<div class="flex py-1 px-2 bg-black bg-opacity-20">
  <fieldset class="relative opacity-80 border rounded-lg bg-background-dark bg-opacity-20 overflow-clip">
    <legend class="ml-[0.75rem] text-xs px-[0.25rem]">User</legend>
    <input class="bg-transparent outline-0 py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" disabled type="text" value="{contact.steam}" required/>
  </fieldset>

  <div class="ml-auto flex">
    <fieldset class="relative opacity-80 border rounded-lg bg-background-dark bg-opacity-20 overflow-clip">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Time</legend>
      <input class="bg-transparent outline-0 text-lg py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" disabled type="time" value="{contact.time}" required/>
    </fieldset>
    <fieldset class="relative opacity-80 border rounded-lg bg-background-dark bg-opacity-20 overflow-clip ml-0.5">
      <legend class="ml-[0.75rem] text-xs px-[0.25rem]">Date</legend>
      <input class="bg-transparent outline-0 text-lg py-0.5 px-1 -mt-0.25 focus:ring-0 border-0" disabled type="date" value="{contact.date}" required/>
    </fieldset>
  </div>
</div>

<style>
    input {
        color-scheme: dark;
    }
</style>