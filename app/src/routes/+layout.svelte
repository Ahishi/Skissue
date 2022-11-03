<script>
    import "../app.css";
    const navs = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Forms',
            href: '/forms'
        },
        {
            name: 'Groups',
            href: '/groups'
        },
    ]
</script>

<nav class="h-[65px] w-screen flex justify-center bg-purple-600 relative">
    {#each navs as nav}
        <a class="h-full px-5 hover:bg-purple-700 text-white font-semibold flex" href="{nav.href}">
            <p class="my-auto uppercase text-sm">{nav.name}</p>
        </a>

        <a class="h-full px-5 hover:bg-purple-700 flex text-white font-semibold absolute right-0" href="/profile">
            <p class="my-auto uppercase text-sm">Profile</p>
        </a>
    {/each}
</nav>
<slot />
