<script lang="ts">
    import type { TableColumn } from "$lib/types";
    const { columns, data }: { columns: TableColumn[], data: any} = $props();
</script>

<table>
    <thead>
        <tr>
            {#each columns as column}
                <th>{column.label}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row}
            <tr>
                {#each columns as column}
                    <td>{row[column.fieldName]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>