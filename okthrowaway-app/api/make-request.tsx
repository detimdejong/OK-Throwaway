const baseUrl = "http://www.okthrowaway.somee.com/api/";
export async function get<TData>(endpoint: string) {
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

