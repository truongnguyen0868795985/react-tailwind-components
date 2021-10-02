import React, { useState, useEffect } from "react";
import axios from "axios";
import MyReactPaginate from "react-paginate";

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

  const [limit] = useState(10); // limit biasanya statis
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
      // const slicedPosts = res.data.slice(offset, offset + limit)
      setPosts(res.data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  const classNames = "bg-white text-blue-500 px-2 py-1 border rounded-md";

  const offset = currentPage * limit;

  const currentPagePosts = posts
    .slice(offset, offset + limit)
    .map((post, i) => <Post key={i} post={post} />);

  const pageCount = Math.ceil(posts.length / limit);

  if (loading) return <h1 className="text-3xl font-bold">Loading...</h1>;

  return (
    <div className="min-h-screen w-full">
      <article className="flex gap-10 flex-wrap">{currentPagePosts}</article>

      <article className="flex justify-center my-5">
        Showing {limit * currentPage + 1} - {limit * (currentPage + 1)} of{" "}
        {posts.length} posts
      </article>

      <MyReactPaginate
        previousLabel="previous"
        previousClassName={classNames}
        nextLabel="next"
        nextClassName={classNames}
        breakLabel="..."
        breakClassName={classNames}
        containerClassName="flex justify-center my-5 gap-3"
        pageClassName={classNames}
        activeClassName="bg-blue-100"
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </div>
  );
}
