<script lang="ts">
  export let contact
</script>

<div class="flex py-1 px-2 bg-black bg-opacity-20">
  <span class="text-sm font-medium my-auto mr-0.25">Steam:</span>
  <h4 class="my-auto capitalize">{contact.steam}</h4>

  <div class="ml-auto flex gap-1">
    <h4>
      <span class="text-sm font-medium mr-0.25">Time:</span>
      {contact.time}
    </h4>
    <h4>
      <span class="text-sm font-medium mr-0.25">Date:</span>
      {contact.date}
    </h4>
  </div>
</div>

<style>
    input {
        color-scheme: dark;
    }
</style>