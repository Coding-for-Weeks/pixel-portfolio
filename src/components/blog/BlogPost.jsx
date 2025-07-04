import { useParams } from "react-router-dom";
import { marked } from "marked";
import posts from "../../posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-red-400 mt-20">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-purple-400 mb-8">{post.date}</p>
      <article
        className="prose prose-invert prose-p:text-gray-200"
        dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
      />
    </div>
    </div>
  );
}
