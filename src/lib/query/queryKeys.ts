export const queryKeys = {
  example: {
    all: ["example"] as const,
    list: (query?: unknown) => [...queryKeys.example.all, query] as const,
    item: (id: string) => [...queryKeys.example.all, id] as const,
  },
};
