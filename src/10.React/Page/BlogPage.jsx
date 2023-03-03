import React from "react";
import { Link } from "react-router-dom";
import data from "../db/data";

const BlogPage = () => {
    return (
        <div>
            <h1>Lista de blod</h1>
            {data.map((post) => (
                <BlogItem key={post.slug} post={post} />
            ))}
        </div>
    );
};

export default BlogPage;

const BlogItem = ({ post }) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title} </Link>
        </li>
    );
};
