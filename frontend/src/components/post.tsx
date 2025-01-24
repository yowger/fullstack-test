import Button from "./button"

export default function Post() {
    return (
        <div className="bg-white rounded p-3 shadow-md space-y-4">
            <div className="flex gap-2 align-center items-center">
                <h1 className="text-2xl font-bold">Post</h1>
                <div className="bg-red-500 text-white p-1 text-xs">failed</div>
            </div>

            <div className="text-gray-500 text-sm flex gap-2">
                <span>14 years ago</span>
                <span className="text-gray-300">|</span>
                <a href="/article" className="text-blue-500 hover:underline">
                    article
                </a>
                <span className="text-gray-300">|</span>
                <a href="/video" className="text-blue-500 hover:underline">
                    video
                </a>
            </div>

            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2">
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Post Thumbnail"
                        className="rounded object-cover w-full h-auto"
                    />
                </div>

                <div className="col-span-6">
                    <p className="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat minima incidunt cum ullam natus. Ratione
                        veritatis delectus voluptates, iusto incidunt reiciendis
                        accusamus explicabo laboriosam. Adipisci, amet error.
                        Molestiae, eum id.
                    </p>
                </div>
            </div>

            <Button>View</Button>
        </div>
    )
}
