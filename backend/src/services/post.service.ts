import { appDataSource } from "../db/db-source";
import ApiError from "../exceptions/api.error";
import { Post } from "../models/post.model";
import firebaseService from "./firebase.service";

class PostService {
  async newPost(postData: any, author: any) {
    const postRepo = appDataSource.getRepository(Post);
    const newPost = new Post();
    newPost.author = author.uid;
    newPost.markdown = postData.markdown;
    newPost.title = postData.title;

    await postRepo.save(newPost);
  }

  async getPosts(page: number, limit: number) {
    const postRepo = appDataSource.getRepository(Post);
    const posts = await postRepo.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    const [_, totalPosts] = await postRepo.findAndCount({});
    const totalPages = Math.ceil(totalPosts / limit);

    return {
      pages: { posts_count: totalPosts, pages_count: totalPages },
      posts,
    };
  }

  async getPost(postId: number) {
    const postRepo = appDataSource.getRepository(Post);
    const post = await postRepo.findOneBy({
      id: postId,
    });
    if (!post) throw ApiError.BadRequest();

    const author = await firebaseService.getUser(post.author);
    if (!author) throw ApiError.DbError();
    delete post["author"];

    const authorDto = {
      name: author.displayName,
      avatar: author.photoURL,
      uid: author.uid,
    };
    return { post, author: authorDto };
  }

  async updatePost(postData: any, author: any) {
    const postRepo = appDataSource.getRepository(Post);

    await postRepo.update(
      { id: postData.id, author: author.uid },
      { title: postData.title, markdown: postData.makdown }
    );
  }

  async deletePost(postId: number) {}
}
export default new PostService();
