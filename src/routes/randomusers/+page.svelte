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

<h1>Random Users is working</h1>
<DataTable columns={data.columns} data={data.data} />