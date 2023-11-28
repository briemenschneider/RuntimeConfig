
export async function loadConfig<T extends object>(path: string, filename: string): Promise<T> {
    const config = await fetch(`${path}/${filename}`);
    const json = await config.json();
    return JSON.parse(json) as T;
}