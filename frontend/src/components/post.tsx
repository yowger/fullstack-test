import Button from "./button"

interface PostProps {
    post: {
        id: string
        title: string
        body: string
        status: string
        thumbnail: string
        timestamp: string
        type: string
        articleUrl: string
        videoUrl: string
    }
}

export default function Post({ post }: PostProps) {
    return (
        <div className="bg-white rounded p-3 shadow-md space-y-4">
            <div className="flex gap-2 align-center items-center">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div
                    className={`bg-${
                        post.status === "failed" ? "red" : "green"
                    }-500 text-white p-1 text-xs`}
                >
                    {post.status}
                </div>
            </div>

            <div className="text-gray-500 text-sm flex gap-1">
                <span>{post.timestamp} ago</span>
                <span className="text-gray-300">|</span>
                <a
                    href={post.articleUrl}
                    className="text-blue-500 hover:underline"
                >
                    article
                </a>
                <span className="text-gray-300">|</span>
                <a
                    href={post.videoUrl}
                    className="text-blue-500 hover:underline"
                >
                    video
                </a>
            </div>

            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2">
                    <img
                        src={post.thumbnail}
                        alt="Post Thumbnail"
                        className="rounded object-cover w-full h-auto"
                    />
                </div>

                <div className="col-span-6">
                    <p className="text-gray-700 text-sm">{post.body}</p>
                </div>
            </div>

            <Button>View</Button>
        </div>
    )
}
