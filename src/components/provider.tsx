"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, //  쿼리 데이터가 얼마나 오래된 상태로 캐시될지 = 1분
        retry: 1, // 쿼리 실패 시 재시도 횟수
      },
      mutations: {
        retry: 1, // 뮤테이션 실패 시 재시도 횟수
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;