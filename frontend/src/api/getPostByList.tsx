import { Post } from "../types/post"
import { useInfiniteQuery } from "@tanstack/react-query"
import { axiosPublic } from "../lib/axios"
import { InfiniteQueryConfig } from "../lib/queryClient"

interface PaginatedResponse<T> {
    posts: T[]
    metadata: {
        page: number
        limit: number
        totalCount: number
        totalPages: number
    }
}

interface FetchPostsByListOptions {
    page: number
    limit: number
    title?: string
}

const fetchPostsByList = async ({
    page,
    limit,
    title,
}: FetchPostsByListOptions): Promise<PaginatedResponse<Post>> => {
    const response = await axiosPublic.get("/post", {
        params: { page, limit, title },
    })

    return response.data
}

interface UseGetChatsOptions {
    config?: InfiniteQueryConfig<PaginatedResponse<Post>>
}

export const useInfinitePosts = (options: UseGetChatsOptions = {}) => {
    return useInfiniteQuery<PaginatedResponse<Post>>({
        queryKey: ["posts"],
        initialPageParam: 0,
        queryFn: fetchPostsByList,
        getNextPageParam: (lastPage: PaginatedResponse<Post>) => {
            const nextPage = lastPage.metadata.page + 1
            const hasNextPage = nextPage <= lastPage.metadata.totalPages

            return hasNextPage ? nextPage : undefined
        },
    })
}
