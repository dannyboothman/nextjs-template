let cachedBaseUrl: string | null = null;

export async function getApiBaseUrl() {
  if (cachedBaseUrl) return cachedBaseUrl;
  const res = await fetch("/api/services/config");
  const data = await res.json();
  cachedBaseUrl = data.apiBaseUrl;
  return cachedBaseUrl;
}

export const api = {
  get: async (url: string) => {
    return customFetch(url, {
      method: "GET",
    });
  },
  post: async (url: string, body: unknown) => {
    return customFetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
  patch: async (url: string, body: unknown) => {
    return customFetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  },
  delete: async (url: string) => {
    return customFetch(url, {
      method: "DELETE",
    });
  },
};

export async function customFetch(url: string, options?: RequestInit) {
  const baseUrl = await getApiBaseUrl();
  const token = "";
  if (options) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  const response = await fetch(`${baseUrl}${url}`, options);
  return handleResponse(response);
}

export async function handleResponse(response: Response) {
  if (response.status === 204) {
    return;
  }

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message || "Invalid error response");
  }

  return json;
}
