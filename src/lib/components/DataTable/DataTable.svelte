<script lang="ts">
    import type { TableColumn } from "$lib/types";
    const { columns, data }: { columns: TableColumn[], data: any} = $props();
</script>

<table class="table table-fixed w-full border border-slate-300 border-collapse">
    <thead class="text-left">
        <tr class="bg-slate-100">
            <th class="table-col w-12 text-center"></th>
            <th class="table-col w-12 text-center">
                <input type="checkbox" name="" />
            </th>
            {#each columns as column}
                <th class="border border-slate-300 overflow-hidden text-nowrap text-ellipsis text-slate-700 px-2 py-1" title={column.label}>{column.label}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row, index}
            <tr>
                <td class="w-12 table-col text-center">{index + 1}</td>
                <td class="w-12 table-col text-center">
                    <input type="checkbox" name="" />
                </td>
                {#each columns as column}
                    <td class="table-col" title={row[column.fieldName]}>{row[column.fieldName]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .table-col {
        @apply border border-slate-300 overflow-hidden text-nowrap text-ellipsis text-slate-700 px-2 py-1;
    }
</style>