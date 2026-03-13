import { Link } from "react-router-dom";
import posts from "../data/posts";
import "./Blog.css";


export default function Blog() {
    return (
        <section className="blog">
            <h1>Blog</h1>

            <div className="blog_list">
                {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="blog_card">
                <h3 className="blog_title">{post.title}</h3>
                <p className="blog_date">{post.date}</p>
                <p className="blog_excerpt">{post.excerpt}</p>
                </Link>
                ))}
            </div>
        </section>

    );
}