export interface Post {
    id: string;
    title: string;
    status: "failed" | "success" | "upcoming";
    postCreated: Date;
    articleLink?: string;
    videoLink?: string;
  }