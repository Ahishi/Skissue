<script>
  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
  import axios from "axios";

  let openLoginOptions = false;
  let login = true;

  let user = {
    email: "anttiaho01@gmail.com",
    password: "testuser"
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  function loginAction() {
    axios.post("http://localhost:8080/login", user, config)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
</script>

<button on:click={() => openLoginOptions = !openLoginOptions}
        class="absolute right-2 top-2 material-symbols-outlined opacity-80 hover:opacity-100" href="/forms">login
</button>
{#if openLoginOptions}
  <section class="w-fit bg-background-darker rounded fixed top-1 right-1">
    <form class="flex flex-col">
      {#if login}
        <LoginForm />
      {:else}
        <RegisterForm />
      {/if}
      <div class="flex justify-between border-t border-background-dark px-2 py-1">
        {#if login}
          <button on:click={() => {login = false}} type="button"
                  class="text-sm opacity-80 hover:opacity-100 transition font-medium">Register
          </button>
        {:else}
          <button on:click={() => {login = true}} type="button"
                  class="text-sm opacity-80 hover:opacity-100 transition font-medium">Login
          </button>
        {/if}
        <div class="flex">
          <button class="px-1 opacity-80 hover:opacity-100 transition" type="reset"
                  on:click={() => {openLoginOptions = false}}>Cancel
          </button>
          <button class="rounded-full bg-primary opacity-80 hover:opacity-100 transition py-0.5 px-1 font-medium"
                  type="button" on:click={loginAction}>Login
          </button>
        </div>
      </div>
    </form>
  </section>
{/if}