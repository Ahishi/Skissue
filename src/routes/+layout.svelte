<script lang="ts">
  import "../app.css";
  import { getContext, onMount, setContext } from "svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";
  import { writable } from "svelte/store";

  setContext("user", writable(null))
  const loggedUser = getContext("user")

  onMount(async () => {
    loggedUser.set(auth.currentUser)
    onAuthStateChanged(
      auth,
      async (user) => {
        if(user){
          loggedUser.set(user)
        }
      }
    );
  })
</script>

<slot />