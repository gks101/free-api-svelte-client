import type { TableColumn } from "$lib/types";
import { TableColumnType } from "$lib/types";

const randomUserTableColumns: TableColumn[] = [
    { label: 'Name', fieldName: 'name', type: TableColumnType.TEXT },
];

export {randomUserTableColumns};