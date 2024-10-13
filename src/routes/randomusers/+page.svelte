<script lang="ts">
    import DataTable from "$lib/components/DataTable/DataTable.svelte";
import { randomUserTableColumns } from "$lib/data/TableColumns";

    let { data } = $props();

    $effect(() => {
        console.log("Receieved data: ", data);
    });
</script>

<svelte:head>
    <title>Random Users</title>
</svelte:head>

<div class="container p-12">
    <DataTable columns={data.columns} data={data.data} />
</div>