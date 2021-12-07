import url from "./url";

export async function get<TData>(endpoint: string, body?: RequestInit) {
    return await (await fetch(`${url}${endpoint}`, { ...body })).json() as TData[];
}

export async function post(endpoint: string, body: any) {
    return await (await fetch(`${url}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })).status;
}