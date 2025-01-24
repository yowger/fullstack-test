import {
    QueryClient,
    UndefinedInitialDataInfiniteOptions,
} from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
})

export type InfiniteQueryConfig<T> = Omit<
    UndefinedInitialDataInfiniteOptions<T>,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
>
