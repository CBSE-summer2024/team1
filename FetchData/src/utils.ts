type UrlParams = {
    [key: string]: string | number | null;
};

export const buildUrl = (baseUrl: string, params: UrlParams = {}): string => {
    let url = baseUrl;

    for (const key in params) {
        const value = params[key];
        if (value !== null && value !== undefined) {
            url = url.replace(`:${key}`, String(value));
        }
    }
    return url.replace(/\/:.*?\b/g, '');
};