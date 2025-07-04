import { Link } from "react-router-dom";
import posts from "../../posts";

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20"> {/* Add pt-20 */}
      <h1 className="text-4xl text-center font-bold mb-8 border-b border-purple-500 pb-2">
      📖 Codex of Echoes
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <div className="bg-[#1a1a2e] border border-purple-500 p-5 rounded-xl hover:scale-[1.02] hover:border-pink-400 transition-transform shadow-lg">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-purple-400 mb-2">{post.date}</p>
              <p className="text-gray-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
