export interface Post{
  id: number;
  likes: number;
  dislikes: number;
  created_at: string;
  updated_at: string;

  title: string;
  markdown: string;

  author: string;
  avatar?: string;
  author_name?: string;
}

export interface ApplicationPosts{
  total_posts: number;
  page_size: number;
  total_pages: number;
  posts: Post[];
}
