<script lang="ts">
    let { data } = $props();

    $effect(() => {
        console.log("Receieved data: ", data);
    });
</script>

<svelte:head>
    <title>Home | Dashboard</title>
</svelte:head>

<div class="container p-4 h-full w-full">
    <!-- <div class="flex justify-center pb-4 border-b-[1px] border-b-blue-500"> -->
    <div class="flex justify-center pb-4 shadow-lg shadow-blue-100 rounded-sm">
        <h1 class="text-center uppercase text-2xl">Dashboard</h1>
    </div>

    <div class="flex flex-wrap justify-center gap-4 w-full mt-12">
        <div class="p-4 rounded-lg shadow-lg cursor-pointer hover:text-blue-400 w-1/4 min-w-80 text-center">
            <a href="/randomusers">Random Users</a>
        </div>
        <div class="p-4 rounded-lg shadow-lg cursor-pointer hover:text-blue-400 w-1/4 min-w-80 text-center">
            <a href="/books">Books</a>
        </div>
        <div class="p-4 rounded-lg shadow-lg cursor-pointer hover:text-blue-400 w-1/4 min-w-80 text-center">
            <a href="meals">Meals</a>
        </div>
        <div class="p-4 rounded-lg shadow-lg cursor-pointer hover:text-blue-400 w-1/4 min-w-80 text-center">
            <a href="/stocks">Stocks</a>
        </div>
    </div>
</div>