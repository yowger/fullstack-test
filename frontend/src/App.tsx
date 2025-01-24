// out of time, what needs -> refactoring, type safety, debounce search... sad, 

import InfiniteScroll from "react-infinite-scroll-component"
import { useInfinitePosts } from "./api/getPostByList"
import Post from "./components/post"
import PostInput from "./components/postInput"

export default function App() {
    const { data, fetchNextPage, hasNextPage, isLoading, isError } =
        useInfinitePosts()
    // console.log("🚀 ~ App ~ data:", data)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error loading posts</div>

    // const posts = data?.pages.flatMap((page) => page.posts) || []
    const posts = data?.pages.flatMap((page) => page.data) || []
    console.log("🚀 ~ App ~ posts:", posts)
    const maxPostLength = data?.pages[0].metadata.totalCount

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-lg mx-auto flex flex-col gap-6">
                <PostInput />
                <InfiniteScroll
                    dataLength={maxPostLength || 0}
                    next={fetchNextPage}
                    hasMore={hasNextPage || false}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {posts.map((post, index) => {
                        {
                            console.log("post:", post)
                            return <Post key={index} post={post} />
                        }
                    })}
                </InfiniteScroll>
            </div>
        </div>
    )
}
