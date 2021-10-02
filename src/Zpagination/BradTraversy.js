import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Post({ post }) {
  return (
    <section className="flex flex-col gap-2 w-32 border p-2 rounded-lg bg-gray-100">
      <p className="text-lg font-bold truncate">{post.title}</p>
      <p className="text-sm truncate">{post.body}</p>
    </section>
  );
}

function Pagination({ limit, totalPosts, paginate }) {
  // const pageNumbers = [];
  const pageCount = Math.ceil(totalPosts / limit);

  // for (let i = 1; i < pageCount; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <article className="flex mt-5 items-center justify-center gap-2">
      <section className="flex items-center justify-center w-12 h-12 mr-1 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white">
        <FiChevronLeft className="w-6 h-6" />
      </section>

      <section className="flex h-12 font-medium bg-white border border-gray-300 rounded-full">
        {Array(pageCount)
          .fill("")
          .map((num, i) => (
            <div
              key={i}
              onClick={() => paginate(i + 1)}
              className="items-center justify-center w-12 h-12 transition duration-150 ease-in rounded-full cursor-pointer hover:bg-purple-500 hover:text-white"
            >
              {i + 1}
            </div>
          ))}
      </section>

      {/* {pageNumbers.map((num) => (
        <div
          onClick={() => paginate(num)}
          className="p-2 border cursor-pointer rounded-md hover:bg-gray-200"
        >
          <p className="">{num}</p>
        </div>
      ))} */}

      <section className="flex items-center justify-center w-12 h-12 ml-1 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white">
        <FiChevronRight className="w-6 h-6" />
      </section>
    </article>
  );
}

export default function BradTraversy() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

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

  // get current posts
  const indexOfLastPosts = currentPage * limit;
  const indexOfFirstPosts = indexOfLastPosts - limit;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

  // on paginate
  const paginate = (num) => setCurrentPage(num);

  if (loading) return <h1 className="text-3xl font-bold">Loading...</h1>;

  return (
    <div className="min-h-screen w-full">
      <article className="flex gap-10 flex-wrap">
        {currentPosts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </article>

      <Pagination limit={limit} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}
