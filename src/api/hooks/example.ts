import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query/queryClient";
import { queryKeys } from "@/lib/query/queryKeys";
import { api } from "@/api/services/api-service";

export const useExample = () => {
  return useSuspenseQuery({
    queryKey: queryKeys.example.list(),
    queryFn: () => api.get("/example"),
  });
};

export const useExampleMutation = () => {
  return useMutation({
    mutationFn: (data: unknown) => api.post("/example", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.example.list() });
    },
  });
};
