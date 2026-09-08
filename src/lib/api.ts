const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export class ApiError extends Error {
  status: number;
  data: Record<string, unknown>;

  constructor(
    message: string,
    status: number,
    data: Record<string, unknown> = {}
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  token?: string | null;
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { body, token, headers, ...rest } = options;

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data: Record<string, unknown> = {};
  try {
    data = await response.json();
  } catch {
    // empty body
  }

  if (!response.ok) {
    throw new ApiError(
      (data.error as string) ||
        (data.message as string) ||
        "Something went wrong",
      response.status,
      data
    );
  }

  return data as T;
}
