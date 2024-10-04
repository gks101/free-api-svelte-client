export interface NavItem {
    label: string,
    url: string
}

export interface TableColumn {
    label: string,
    fieldName: string,
    type: TableColumnType
}

export enum TableColumnType {
    DATE,
    DATETIME,
    EMAIL,
    NUMBER,
    TEXT,
    URL,
}

export interface User {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    dob: string,
}