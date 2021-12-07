
const baseUrl = "https://localhost:5001/api/";
export async function get<TData>(endpoint: string) {
    return await fetch(`${baseUrl}${endpoint}`)
                    .then(res => res.json())
                    .then(json => { return json as TData[] })
}

export async function post(endpoint: string, body: any) {
    return await fetch(`${baseUrl}${endpoint}`, {
                        body: body
                    })
                    .then(res => res.json());
}