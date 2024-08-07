import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const posts = await prisma.post.findMany({
    //include: postDataInclude,
    include: {
      user: {
        select: { 
          username: true,
          displayName: true,
          avatarURL: true,
        },
      },
      },
    orderBy: { createdAt: "desc" },
  });
  
  return (
    <main className="flex w-full min-w-0 gap-5 ">
      <div className="w-full min-w-0 space-y-5 ">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
