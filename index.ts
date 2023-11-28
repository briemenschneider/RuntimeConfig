
export async function runtimeConfig<T extends object>(path: RequestInfo): Promise<T> {
    const config = await fetch(path);
    const json = await config.json() as T;
    return json;
}