<a class="hover:scale-105 transition ease-in-out duration-100 cursor-pointer">
    <div class="bg-gray-300 rounded-lg w-[200px] h-[282px] relative shadow-lg pt-20">
        <div class="opacity-50 mx-auto rounded-full bg-gray-400 w-fit h-fit text-gray-300">
            <span class="material-symbols-outlined text-center w-[76px] text-3xl p-5"> {icon} </span>
        </div>
        <div class="{color} absolute rounded-md w-[220px] h-[65px] -ml-[10px] bottom-0 text-white flex shadow-md">
            <h4 class="uppercase font-semibold text-center m-auto">{form.name}</h4>
        </div>
    </div>
</a>

<script>
    export let form;
    export let color;
    export let icon;
</script>
