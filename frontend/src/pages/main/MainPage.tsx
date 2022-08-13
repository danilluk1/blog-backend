import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { $axios } from "../../api/axios";
import { Post } from "../../models/Post";
import PostCard from "./components/PostCard";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    async function getPosts() {
      $axios
        .get(`/posts?page=${currentPage}&limit=5`)
        .then((response) => {
          setPosts(response.data.posts.posts);
          console.log(response.data);
          setTotalPages(Number(response.data.posts.pages.pages_count));
        })
        .catch((err) => console.error(err));
    }

    getPosts();
  }, [currentPage]);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        {posts?.map((post: Post) => (
          <PostCard post={post} key={post.id} />
        ))}
        <ReactPaginate
          pageCount={totalPages}
          className={styles.paginate}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={(event) => onChangePage(event.selected + 1)}
          pageRangeDisplayed={4}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
};

export default MainPage;
