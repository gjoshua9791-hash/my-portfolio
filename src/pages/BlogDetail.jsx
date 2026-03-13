import { Link, useParams } from "react-router-dom";
import posts from "../data/posts";
import "./Blog.css";


export default function BlogDetail() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <section className="blog">
                <h1>Post Not Found</h1>
                <Link className="blog_back" to="/blog">Back to Blog</Link>
            </section>
        );
    }

    return (
        <section className="blog">
            <Link className="blog_back" to="/blog">Back to Blog</Link>

            <div className="blog_detailCard">
                <h1 className="blog_detailTitle">{post.title}</h1>
                <p className="blog_date">{post.date}</p>

                <div className="blog_content">
                    {post.content.split("\n").map((line, idx) =>(
                        <p key={idx}>{line}</p>
                    ))}
                </div>

                {post.tags?.length > 0 && (
                    <div className="blog_tags">
                        {post.tags.map((tag) => (
                        <span key={tag} className="blog_tag">
                            {tag}
                        </span>
                    ))}
                    </div>
                )}
            </div>
        </section>
    );


}