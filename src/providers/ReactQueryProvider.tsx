import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
      retry: 1, // reintenta 1 vez si hay error
      staleTime: 1000 * 60, // 1 minuto (datos frescos)
      gcTime: 1000 * 60 * 5, // 5 minutos en caché
    },
  },
});

interface Props {
  children: ReactNode;
}

export const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
