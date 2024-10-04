import { TableColumnType, type TableColumn, type User } from "$lib/types.js";

const columns: TableColumn[] = [
    { label: 'Firstname', fieldName: 'firstname', type: TableColumnType.TEXT },
    { label: 'lastname', fieldName: 'lastname', type: TableColumnType.TEXT },
    { label: 'Id', fieldName: 'id', type: TableColumnType.NUMBER },
    { label: 'Gender', fieldName: 'gender', type: TableColumnType.TEXT },
    { label: 'Email', fieldName: 'email', type: TableColumnType.TEXT },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function composeUser(user: Record<string, any | undefined>[]): User[] {
    return user.map((u) => {
        return {
            id: u.id,
            firstname: u.name.first,
            lastname: u.name.last,
            email: u.email,
            dob: u.dob,
            gender: u.gender
        }
    })
}

export async function load({fetch}) {
    const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers');
    const usersData = await res.json();
    console.log(usersData);
    return {
        "columns": columns,
        "data": composeUser(usersData.data.data)
    };
}