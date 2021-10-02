import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "rc-pagination";

function Post({ post }) {
  return (
    <section className="flex flex-col gap-2 w-32 border p-2 rounded-lg bg-gray-100">
      <p className="text-lg font-bold truncate">{post.title}</p>
      <p className="text-sm truncate">{post.body}</p>
    </section>
  );
}

export default function BradTraversy() {
  const [loading, setLoading] = useState(false);

  // const [limit, setLimit] = useState(10); // limit biasanya statis
  // const [offset, setOffset] = useState(0); // currentPage * limit
  // const [pageCount, setPageCount] = useState(0); // Math.ceil(posts.length / limit)
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  const offset = (currentPage - 1) * 10;

  const currentPagePosts = posts
    .slice(offset, offset + 10)
    .map((post, i) => <Post key={i} post={post} />);

  if (loading) return <h1 className="text-3xl font-bold">Loading...</h1>;

  return (
    <div className="min-h-screen w-full">
      <article className="flex gap-10 flex-wrap">{currentPagePosts}</article>

      <Pagination
        className="flex justify-center items-center gap-2 mt-10 border bg-gray-100 rounded-md mx-10"
        showTotal={(total, range) =>
          `${range[0]} - ${range[1]} of ${total} items`
        }
        pageSize={10}
        total={posts.length}
        current={currentPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
