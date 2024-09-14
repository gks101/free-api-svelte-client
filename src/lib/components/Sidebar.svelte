<script lang="ts">
    import type { NavItem } from "../types";
    import { page } from "$app/stores";

    let menuItems: NavItem[] = [
        {
            label: "Random Users",
            url: "/randomusers"
        },
        {
            label: "Books",
            url: "/books",
        },
        {
            label: "Meals",
            url: "/meals",
        },
        {
            label: "Stocks",
            url: "/stocks"
        }
    ];

    $effect(() => {
        console.log($page);
    });
</script>
<div class="container bg-blue-600 w-full h-full p-4">
    <h1 class="text-2xl text-white font-bold">FreeApi.app</h1>
    <div class="container mt-4">
        <ul class="list-none">
            {#each menuItems as menuItem}
                <li class="mb-2">
                    <a href={menuItem.url}>
                        <div class="px-4 py-2 text-white hover:bg-blue-500 rounded-md cursor-pointer" class:active={$page.route.id === menuItem.url}>
                            {menuItem.label}
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    li .active {
        background-color: rgb(0, 78, 172);
    }
</style>