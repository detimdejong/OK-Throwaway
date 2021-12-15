
const baseUrl = "https://145.24.238.92:5001/api/";
export async function get<TData>(endpoint: string) {
    console.log(`${baseUrl}${endpoint}`);
    return await fetch(`${baseUrl}${endpoint}`)
        .then(res => res.json())
        .then(json => { return json as TData[] })
}

export async function post(endpoint: string, body: any) {
    return await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.status);
}