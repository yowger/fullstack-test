import Post from "./components/post"
import PostInput from "./components/post-input"

export default function App() {
    return (
        <div className="bg-gray-100 h-screen p-6">
            <div className="max-w-lg mx-auto flex flex-col gap-6">
                <PostInput />
                <Post />
            </div>
        </div>
    )
}
